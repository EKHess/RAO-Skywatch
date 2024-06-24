import React, { useState, useEffect} from 'react';

function AllSky() {
    const [time, setTime] = useState('');
    const [imageObj, setImageObj] = useState(
        {
            url: `https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG?timestamp=${Date.now()}`
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
            url: `https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG?timestamp=${Date.now()}`
        }
      )  
    },[time])

    return (
        <div>
            <h1>Last Updated {time}</h1>  
            <img key={Date.now()} src={imageObj.url} alt="AllSky view of skies over the RAO"/>
        </div>
    );
}

export default AllSky;