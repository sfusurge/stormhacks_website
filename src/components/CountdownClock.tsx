"use client";

import React, { useState, useEffect } from 'react';

const CountdownClock = () => {
    const [hackTime, setHackTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("05/18/2024 23:59:59");

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);

            if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
                setHackTime(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer-wrapper">
            <div className="timer-inner">
                {hackTime ? (
                    <div className="hacking-message">
                        <h1>Happy Hacking</h1>
                    </div>
                ) : (
                    <>
                        <div className="timer-segment">
                            <span className="time">{days}</span>
                            <span className="label">Days</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time">{hours}</span>
                            <span className="label">Hours</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time">{minutes}</span>
                            <span className="label">Minutes</span>
                        </div>
                        <div className="timer-segment">
                            <span className="time">{seconds}</span>
                            <span className="label">Seconds</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CountdownClock;