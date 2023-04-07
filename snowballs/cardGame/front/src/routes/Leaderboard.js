import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import axios from 'axios';

function Leaderboard() {

    const { hour, min, sec, nick, level } = useLocation().state;
    const [ rate, setRate ] = useState(null);
    
    useEffect(() => {
    const temp= [];
    axios.post('http://localhost:8001/leaderboard', {
        nick: nick,
        level: level,
        time: `${hour}${min}${sec}`,
    })
        .then((res) => {
            setRate(res.data.scoreBoard);
            for(let i=0; i<res.data.scoreBoard.length; i++){
                temp.push(res.data.scoreBoard[i]);
            }
        })
        .catch((err) => {
            console.error(err);
        });
    },[]);

    if(rate != null) {
    return(
        <>
            <h1>ClearTime!</h1>
            <h1>{hour}:{min}:{sec}</h1>
            <hr/>
            <h1>Leaderboard</h1>
            {rate.map((rev, index) => (
                    <table key={index}>
                        <tbody>
                            <tr>
                                <td>{index+1}</td>
                                <td>{rev.nick}</td>
                                <td>{rev.time}</td>
                            </tr>
                        </tbody>
                    </table>      
            ))}
        </>
    );
    }
}

export default Leaderboard;