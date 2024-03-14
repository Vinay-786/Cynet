/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Countdown from './Countdown';

const Clock = () => {



    const dateNow = new Date();
    const eventDate = new Date('March 15,2024, 10:00:00')
    const [isTimeLeft, setIsTimeLeft] = useState(true)
    //remain days
    // const remainDays = eventDate.getDate() - dateNow.getDate();

    const [remainDays, setRemainDays] = useState<number>(eventDate.getDate() - dateNow.getDate() - 1)
    //remain hours of the current day
    const [remainHours, setRemainHours] = useState<number>(24 - dateNow.getHours() + 1);
    // remain minutes in current hour
    const [remainMinutes, setRemainMinutes] = useState<number>(60 - dateNow.getMinutes());
    //remaining seconds in current minutes
    const [remainSeconds, setRemainSeconds] = useState<number>(60 - dateNow.getSeconds());
    const [seconds, setSeconds] = useState<number>(60);

    useEffect(() => {
        // if (!(remainDays >= 0 &&
        //     remainHours >= 0 &&
        //     remainMinutes >= 0 &&
        //     remainSeconds >= 0)) {


        const timer = setTimeout(() => {

            setSeconds(prev => {
                if (prev == 0) {
                    return 60;
                } else {
                    return --prev
                }
            })
            setRemainDays(eventDate.getDate() - dateNow.getDate() - 1)
            setRemainHours(24 - dateNow.getHours() + 1)
            setRemainMinutes(60 - dateNow.getMinutes())
            setRemainSeconds(60 - dateNow.getSeconds())
            setIsTimeLeft(eventDate > dateNow)
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
        // }
    }, [dateNow, eventDate]);
    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center items-center mb-7">
                <Countdown value={isTimeLeft ? remainDays : 0} label='Days' />
                <Countdown value={isTimeLeft ? remainHours : 0} label='Hours' />
                <Countdown value={isTimeLeft ? remainMinutes : 0} label='Minutes' />
                <Countdown value={isTimeLeft ? remainSeconds : 0} label='Seconds' />
            </div>
        </>
    )
}

export default Clock