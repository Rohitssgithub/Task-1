import React, { useState, useEffect } from 'react'

const CounterClock = () => {

    let [day, SetDay] = useState(0)
    let [hour, SetHour] = useState(0)
    let [min, Setmin] = useState(0)
    let [sec, Setsec] = useState(0)

    const deadline = 'August 7, 2023 16:37:05';
    let interval

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        console.log(time)
        if (time <= 0) {
            clearInterval(interval);
            SetDay(0);
            SetHour(0);
            Setmin(0);
            Setsec(0);
        }
        else {
            SetDay(Math.floor(time / (1000 * 60 * 60 * 24)))
            SetHour(Math.floor(time / (1000 * 60 * 60) % 24))
            Setmin(Math.floor((time / 1000 / 60) % 60))
            Setsec(Math.floor((time / 1000) % 60))
        }


    }

    useEffect(() => {
        interval = setInterval(() => {
            getTime()
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <>

            <p>{day}:days</p>
            <p>{hour}:hour</p>
            <p>{min}:min</p>
            <p>{sec}:sec</p>

        </>
    )
}

export default CounterClock