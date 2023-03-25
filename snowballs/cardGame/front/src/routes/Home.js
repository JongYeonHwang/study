import { Link } from 'react-router-dom';
import { useState } from 'react';

function Home() {

    const [level, setLevel] = useState('Low');

    const onClick = (e) => {
        let way = e.target.className;
        if(way === 'left'){
        level === 'Low' ? setLevel('High') : level === 'Medium' ? setLevel('Low') : setLevel('Medium');
        } else {
            level === 'Low' ? setLevel('Medium') : level === 'Medium' ? setLevel('High') : setLevel('Low');
        }
    };

    return (
        <>
        <h1>Welcome</h1>
        <div>
        <button className='left' onClick={onClick}>◀︎</button>
        <span>{level}</span>
        <button className='right' onClick={onClick}>►</button>
        </div>
        <Link to={`/${level}`}>Start</Link>
        </>
    );
}

export default Home;