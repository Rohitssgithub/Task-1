import React, { useEffect, useState } from 'react';
import './CounterClock.css'

const Counter = () => {
    const endDate = "August 4, 2023 13:13:05"
    let [date, SetDate] = useState(endDate)
    let [day, SetDay] = useState(0)
    let [hour, SetHour] = useState(0)
    let [min, SetMin] = useState(0)
    let [sec, SetSec] = useState(0)
    let [value, SetValue] = useState(true)

    const clock = () => {
        // const end = new Date(endDate).getTime()
        // console.log(end + ' end')
        // const now = new Date().getTime()
        // console.log(now + ' now')

        // const diff = (end - now) / 1000;
        // console.log(diff)

        // if (diff < 0) {
        //     SetValue('expired')
        // }

        // else {
        //     SetDay(Math.floor(diff / 3600 / 24))
        //     SetHour(Math.floor(diff / 3600) % 24)
        //     SetMin(Math.floor(diff / 60) % 60)
        //     SetSec(Math.floor(diff) % 60)
        // }
    }

    // let inter = setInterval(() => {
    //     clock()
    // }, 1000)


    useEffect(() => {
        let interval
        if (value) {
            interval = setInterval(() => {
                const end = new Date(endDate).getTime()
                console.log(end + ' end')
                const now = new Date().getTime()
                console.log(now + ' now')

                const diff = (end - now) / 1000;
                console.log(diff)

                if (diff < 0) {
                    SetValue(false)
                }

                else {
                    SetDay(Math.floor(diff / 3600 / 24))
                    SetHour(Math.floor(diff / 3600) % 24)
                    SetMin(Math.floor(diff / 60) % 60)
                    SetSec(Math.floor(diff) % 60)
                }
            }, 500)
        }

        // clock();
        return () => {
            clearInterval(interval);
        };
    }, [SetDay, SetHour, SetMin, SetSec, SetDate])


    return (
        <>
            <p>{date}</p>
            <div>
                <p>{value}</p>
                <span>{day}Day</span>
                <span>{hour}hour</span>
                <span>{min}mintues</span>
                <span>{sec}seconds</span>
            </div>
        </>
    )
}

export default Counter