
import React, { useState, useEffect } from 'react';

export default function Digital_Clock() {
    return (
        <div>
            <h1>Digital Clock</h1>
            <Clock />
        </div>
    );
}
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString();
    };
    return (
        <div>
            <h2>{formatTime(time)}</h2>
        </div>
    );
}