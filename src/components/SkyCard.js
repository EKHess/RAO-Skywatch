import '../styles/reset.css';
import '../styles/style.css';
import React, { useState, useEffect} from 'react';

function AllSky(props) {
    const [time, setTime] = useState('');
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

        const time = `${formatTime(h)}${h}:${formatTime(m)}${m}:${formatTime(s)}${s}`
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
        <div>  
            <img key={Date.now()} src={imageObj.url} alt="AllSky view of skies over the RAO"/>
            <p>Last Updated {time}</p>
        </div>
    );
}

export default AllSky;