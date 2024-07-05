import '../styles/reset.css';
import '../styles/style.css';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function AllSky(props) {
    const [time, setTime] = useState('Syncing...');
    const [imageObj, setImageObj] = useState(
        {
            url: `${props.baseURL}?timestamp=${Date.now()}`
        }
    )

    const formatTime = (val) => {
        if (val < 10) {
            return '0'
        } else {
            return ''
        }
    }

    const updateTime = () => {
        const d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds();

        const time = `Last updated: ${formatTime(h)}${h}:${formatTime(m)}${m}:${formatTime(s)}${s}`
        setTime(time);
    }

    useEffect(() => {
        const timerID = setInterval(() => {
            updateTime();
        }, 60000)

            return function cleanup() {
                clearInterval(timerID);
            }
        }
    )

    useEffect(() => {
      setImageObj(
        {
            url: `${props.baseURL}?timestamp=${Date.now()}`
        }
      )  
    },[time, props.baseURL])

    return (
        <div className='skycard'>  
            <img key={Date.now()} src={imageObj.url} alt="AllSky view of skies over the RAO"/>
            <div className='update-container'>
                <p className='update-text'>{time}</p>
                <Link to='/info'><ion-icon name="information-circle-outline"></ion-icon></Link>
            </div>
        </div>
    );
}

export default AllSky;