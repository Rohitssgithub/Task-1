import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
            }, 10);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStartStop = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatElapsedTime = milliseconds => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        const centiseconds = Math.floor((milliseconds % 1000) / 10);
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="stopwatch">
            <div className="time">{formatElapsedTime(elapsedTime)}</div>
            <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
