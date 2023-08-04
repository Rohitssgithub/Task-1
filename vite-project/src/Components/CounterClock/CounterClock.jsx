import React, { useState, useEffect } from 'react';

const CountdownClock = () => {
    const [targetTime, setTargetTime] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(null);

    const handleStart = () => {
        if (targetTime) {
            const currentTime = new Date().getTime();
            const timeDifference = Math.max(targetTime - currentTime, 0);
            setTimeRemaining(timeDifference);
        }
    };

    const handleInputChange = (event) => {
        const { value } = event.target;
        const timeInMilliseconds = Date.parse(value);

        if (!isNaN(timeInMilliseconds) && timeInMilliseconds >= Date.now()) {
            setTargetTime(timeInMilliseconds);
        } else {
            setTargetTime(null);
        }
    };

    useEffect(() => {
        let intervalId;

        if (timeRemaining !== null && timeRemaining > 0) {
            intervalId = setInterval(() => {
                setTimeRemaining(prevTimeRemaining => Math.max(prevTimeRemaining - 1000, 0));
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [timeRemaining]);

    const formatTime = (timeInMilliseconds) => {
        const seconds = Math.floor(timeInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);

        return `${hours.toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
    };

    return (
        <div className="countdown-clock">
            <h1>Countdown Clock</h1>
            <input type="datetime-local" onChange={handleInputChange} />
            <button onClick={handleStart}>Start Countdown</button>
            {timeRemaining !== null && timeRemaining > 0 && (
                <div className="time-remaining">
                    Time Remaining: {formatTime(timeRemaining)}
                </div>
            )}
        </div>
    );
};

export default CountdownClock;
