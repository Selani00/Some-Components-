import { useEffect, useState } from 'react';

export const useDate =() => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

    useEffect (() => {
        const timer = setInterval(() => { // Creates an interval which updates the current time every second
            setDate(new Date());
        }, 60*100);

        return () => {
            clearInterval(timer); // Return a function to clear the timer so that it will stop being called on unmount
        };
    },[])

    const day = today.toLocaleDateString(locale, {weekday: 'long'});

    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: 'long'})}\n\n`;

    const time = today.toLocaleTimeString(locale, {hour: 'numeric', hour12: true, minute: 'numeric'});

    return {date, time};
}