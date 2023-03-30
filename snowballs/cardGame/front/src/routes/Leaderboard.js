import { useLocation } from "react-router";

function Leaderboard() {

    const { hour, min, sec } = useLocation();

    return(
        <>
            <h1>scoreboard</h1>
            <h1>{hour}:{min}:{sec}</h1>
        </>
    );
}

export default Leaderboard;