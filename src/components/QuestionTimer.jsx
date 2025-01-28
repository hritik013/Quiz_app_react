import { useState,useEffect } from "react";


export default function QuestionTimer({timeout,onTimeout,mode}) {
    const [remainingTime,setRemainingTime]=useState(timeout);
    useEffect (() =>{
        console.log('SETTING TIMEOUT');
        const timer=setTimeout(onTimeout,timeout);
        return () => {
            clearTimeout(timer);
        };

    },[timeout,onTimeout]);

    useEffect(() =>{
        console.log('SETTING INTERVAL');
        const interval=setInterval(() =>{
            setRemainingTime((prevRemainingTime) => prevRemainingTime-100); //updating the remaining time by deducting 100 ms
        },100);

        return () => {
            clearInterval(interval);
        }; //act as a clean up - run automatically

    }, []); //this was used because the setInterval will create the infinte loop as it is running in the const,the useEffect will make sure that we dont have any dependencies


    return (
        <progress id="question-time" max={timeout} value={remainingTime}
        className={mode}
        />
    )
}