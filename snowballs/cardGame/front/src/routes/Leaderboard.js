import { useState } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';

function Leaderboard() {

    const { hour, min, sec, nick, level } = useLocation().state;

    axios.get('/leaderboard', {
        params: {
            nick: nick,
            time: hour,
            level: level,
        },
    })
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.error(err);
        });

    return(
        <>
            <h1>ClearTime!</h1>
            <h1>{hour}:{min}:{sec}</h1>
            <h1>Leaderboard</h1>
        </>
    );
}

export default Leaderboard;