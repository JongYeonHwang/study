import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Card() {

    const movePage = useNavigate();
    const level = useParams();
    const location = useLocation();
    const [urls, setUrls] = useState([]);
    const [reverse, setReverse] = useState([]);
    const [pair, setPair] = useState([null, null]);
    const [revCnt, setRevCnt] = useState(0);
    const [revStatus, setRevStatus] = useState([0,0]);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const nick = location.state.nick;

    let amount = 1;
    switch(level.level){
        case 'Low' : 
            amount = 5;
            break;
        case 'Medium' :
            amount = 10;
            break;
        case 'High' :
            amount = 15;
            break;
            default:
    }

    useEffect(() => {
        shuffle();
        showCard();
        setInterval (() => {
            setSec(sec => sec+1);
        }, 1000);

    }, []);

    function shuffle() {
        const temp = [];
        const temp2 = [];
        for(let i=0; i<2; i++){
            for(let j=1; j<=amount; j++){
                temp.push(`${process.env.PUBLIC_URL}/img/card${j}.jpg`);
                temp2.push(false);
            }
        }

        for(let i=temp.length - 1; i >= 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            let randomCard = temp[random];
            temp[random] = temp[i];
            temp[i] = randomCard;
        }
        setUrls(temp);
        setReverse(temp2);
    }

    function showCard() {
        const tmp = [];
        for(let i=0; i<amount*2; i++){
            tmp.push(false);
        }
        let cnt = -1;
        const firstShow = setInterval(()=> {
            setReverse((prev)=>{
                prev[cnt] = true;
                return [...prev];
            }) 
            cnt++;
            if(cnt == amount*2){
                setReverse(tmp);
                clearInterval(firstShow);
            }
        }, 100)
    }

    const changeCard = (e) => {
        if(revCnt === 0) {
            if(e.target.dataset.type === 'front') {
                setPair((prev) => {
                    prev[0] = urls[e.target.dataset.key];
                    return [...prev];
                });
                setRevCnt(revCnt+1);
                setReverse((prev) => {
                    prev[e.target.dataset.key] = true;
                    return [...prev];
                });
                setRevStatus((prev) => {
                    prev[0] = e.target.dataset.key;
                    return [...prev];
                });
            }
        }
        if(revCnt === 1) {
            if(e.target.dataset.type === 'front') {
                setPair((prev) => {
                    prev[1] = urls[e.target.dataset.key];
                    return [...prev];
                });
                setRevCnt(revCnt+1);
                setReverse((prev) => {
                    prev[e.target.dataset.key] = true;
                    return [...prev];
                });
                setRevStatus((prev) => {
                    prev[1] = e.target.dataset.key;
                    return [...prev];
                });
            }
        }
    }

    useEffect(() => {
        reverseResult();
    }, [pair]);

    function reverseResult () {
        if(pair[1] !== null) {
            if(pair[0] === pair[1]) {
                    setReverse((prev) => {
                        prev[revStatus[0]] = true;
                        prev[revStatus[1]] = true;
                        return [...prev];
                    });
                    setRevStatus([0,0]);
                    setRevCnt(0);
            } else {
                setTimeout(() => {
                    setReverse((prev) => {
                        prev[revStatus[0]] = false;
                        prev[revStatus[1]] = false;
                        return [...prev];
                    });
                    setRevStatus([0,0]);
                    setRevCnt(0);
                }, 2000)
            }
            setPair((prev) => {
                prev[0] = null;
                prev[1] = null;
                return [...prev];
            })
        }
    }

    useEffect(() => {
        if(sec === 60) {
            setSec(0);
            setMin(min => min +1);
        }
        if(min === 60) {
            setMin(0);
            setHour(hour => hour +1);
        }
    }, [sec]);

    useEffect(() => {
        if(reverse.indexOf(false) === -1) {
            if(sec > 4) {

                axios.post('http://localhost:8001/leaderboard/clear', {
                    nick: nick,
                    time: `${hour}${min}${sec}`,
                    level: level.level,
                })
                    .then(() => {
                        movePage('/result', { state:{hour : hour, min : min, sec: sec, nick: nick, level: level.level}});
                })
                    .catch((err) => {
                        console.error(err);
                });
            }
        }
    },[reverse]);    

    return(
        <>
            <h1>{hour}:{min}:{sec}</h1>
            {reverse.map((rev, index) => (
                    <img key={index} data-key={index} data-type={rev ? 'back' : 'front'} src={rev ? urls[index] : `${process.env.PUBLIC_URL}/img/front_image.jpg`} onClick={changeCard}
                        style={{width:'150px', height:'250px'}} alt={`card${index}`}/>      
            ))}
        </>
    );
}

export default Card;