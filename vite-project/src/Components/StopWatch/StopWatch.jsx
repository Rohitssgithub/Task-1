import React, { useEffect, useState } from 'react'

const Stop = () => {
    let [hour, SetHour] = useState(0)
    let [min, SetMin] = useState(0)
    let [sec, SetSec] = useState(0)
    let [start, SetStart] = useState(false)

    useEffect(() => {
        let interval;
        if (start) {
            interval = setInterval(() => {
                SetSec(sec + 1)
                if (sec == 60) {
                    SetMin(min + 1);
                    SetSec(0)
                }

                if (min == 60) {
                    SetHour(hour + 1)
                    SetMin(0);
                    SetSec(0)
                }
            }, 1000)
        }
        return () => {
            clearInterval(interval);
        };
    }, [start, sec, min, hour])


    const handleReset = () => {
        SetStart(false)
        SetSec(0)
        SetMin(0);
        SetHour(0)
    }


    return (
        <>
            <div>{hour < 10 ? '0' + hour : hour} : {min < 10 ? '0' + min : min} : {sec < 10 ? '0' + sec : sec}</div>
            <button onClick={() => SetStart(true)}>start</button>
            <button onClick={() => SetStart(false)}>stop</button>
            {/* <button onClick={() => SetStart(!start)}>{start ? 'stop' : 'start'}</button> */}
            <button onClick={handleReset}>reset</button>
        </>
    )
}

export default Stop