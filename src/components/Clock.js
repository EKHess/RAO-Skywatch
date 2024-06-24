import React, { useState, useEffect} from 'react';

function Clock() {
    const [time, setTime] = useState('');

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
        }, 1000)

            return function cleanup() {
                clearInterval(timerID);
            }
        }
    )

    return (
        <>
            <p>{time}</p>
        </>
    )
}

export default Clock;