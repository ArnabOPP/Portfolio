"use client";

import { useState, useEffect } from "react";

export function RealTimeClock() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format time for Kolkata (IST - GMT+5:30)
            const options: Intl.DateTimeFormatOptions = {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata",
            };
            setTime(new Intl.DateTimeFormat("en-US", options).format(now));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return <span>{time || "--:--:-- --"}</span>;
}
