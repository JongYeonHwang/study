import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';

function Leaderboard() {

    const { hour, min, sec, nick, level } = useLocation().state;
    const { test, setTest } = useState([]);

        axios.post('http://localhost:8001/leaderboard', {
        nick: nick,
        level: level,
        time: `${hour}${min}${sec}`,
    })
        .then((res) => {
            console.log(res.data);
            setTest(res.data.data);
            console.log(test);
        })
        .catch((err) => {
            console.error(err);
        });

    return(
        <>
            <h1>ClearTime!</h1>
            <h1>Leaderboard</h1>
            {/* {rate.map((rev, index) => (
                    <img key={index} data-key={index} data-type={rev ? 'back' : 'front'} src={rev ? urls[index] : `${process.env.PUBLIC_URL}/img/front_image.jpg`} onClick={changeCard}
                        style={{width:'150px', height:'250px'}} alt={`card${index}`}/>       
            ))}  */}
        </>
    );
}

export default Leaderboard;