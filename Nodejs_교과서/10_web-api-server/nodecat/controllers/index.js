'use strict';

const axios = require('axios');

const URL = process.env.API_URL;
axios.defaults.headers.origin = process.env.ORIGIN;         // origin 헤더 추가

const request = async (req, api) => {
    try {
        if(!req.session.jwt) {                              // 세션에 토큰이 없다면
            const tokenResult = await axios.post(`${URL}/token`, {
                clientSecret: process.env.CLIENT_SECRET,
            });
            req.session.jwt = tokenResult.data.token;       // 세션에 토큰 저장
        }
        return await axios.get(`${URL}${api}`, {
            headers: { authorization: req.session.jwt },
        });                                                 // API 요청
    } catch (error) {
        if (error.response?.status === 419 ) {              // 토큰 만료 시 재발급
            delete req.session.jwt;
            return request(req, api);
        }       // 419 외의 다른 에러라면 ( 토큰 만료가 아닌 에러라면 )
        return error.response;
    }
};

exports.getMyPosts = async (req, res, next) => {
    try {
        const result = await request(req, '/posts/my');
        res.json(result.data);
    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.searchByHashtag = async (req, res, next) => {
    try {
        const result = await request(
            req, `/posts/hashtag/${encodeURIComponent(req.params.hashtag)}`,
        );
        res.json(result.data);
    } catch (error) {
        if(error.code) {
            console.error(error);
        }
    }
};