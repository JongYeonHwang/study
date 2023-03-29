import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Card() {

    const level = useParams();
    const [urls, setUrls] = useState([]);
    const [reverse, setReverse] = useState([]);
    const [pair, setPair] = useState([null, null]);
    const [revCnt, setRevCnt] = useState(0);
    const [showRev, setShowRev] = useState([]);

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
    }, []);
    useEffect(()=>{
        console.log('reverse test : ' + reverse);
        console.log('pair : ' + pair);
        console.log('showRev : ' + showRev);
        console.log('revCnt : ' + revCnt);
        console.log('--------------------------')
    }, [showRev])
    function shuffle() {
        const temp = [];
        const temp2 = [];
        const temp3 = [];
        for(let i=0; i<2; i++){
            for(let j=1; j<=amount; j++){
                temp.push(`${process.env.PUBLIC_URL}/img/card${j}.jpg`);
                temp2.push(false);
                temp3.push(false);
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
        setShowRev(temp3);
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
                console.log(prev)
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
        if(revCnt < 2){
        if(e.target.dataset.type === 'front') {
            if(pair[0] === null){
            setPair((prev) => {
                prev[0] = urls[e.target.dataset.key];
                return [...prev];
            });
            setRevCnt(revCnt+1);
            setReverse((prev) => {
                prev[e.target.dataset.key] = true;
                return [...prev];
            });
        }
            if(revCnt > 0) {
                setPair((prev) => {
                    prev[1] = urls[e.target.dataset.key];
                    return [...prev];
                });
                setRevCnt(revCnt+1);
                setReverse((prev) => {
                    prev[e.target.dataset.key] = true;
                    return [...prev];
                });
                if(pair[0] !== pair[1]){
                    console.log('발동되면 안됨');
                    setPair((prev) => {
                        prev[0] = null;
                        prev[1] = null;
                        return [...prev];
                    });
                    let confirmPair = setTimeout(() =>{
                        // console.log('showRev : ' + showRev);
                        setReverse(showRev);
                        // console.log('reverse : ' + reverse);
                        setPair([null, null]);
                        setRevCnt(0);
                        // console.log('pair : ' + pair)
                        if(pair[0] === pair[1]){
                            console.log('발동되면 안됨 2');
                            for(let i=0; i<showRev.length; i++){
                                if(pair[0] == urls[i]){
                                    setReverse((prev) =>{
                                        prev[i] = true;
                                        return [...prev];
                                    })
                                }
                            }
                            setShowRev(reverse);
                        }
                    }, 2000);
                }
            }
            // console.log('revCnt : ' + revCnt);
        } 
    }
    }    

    return(
        <>
            <h1>00:00:00</h1>
            {reverse.map((rev, index) => (
                    <img key={index} data-key={index} data-type={rev ? 'back' : 'front'} src={rev ? urls[index] : `${process.env.PUBLIC_URL}/img/front_image.jpg`} onClick={changeCard}
                        style={{width:'150px', height:'250px'}} alt={`card${index}`}/>      
            ))}
            <button><Link to={`/result`}>Start</Link></button>
        </>
    );
}

export default Card;