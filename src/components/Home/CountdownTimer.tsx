import { useEffect, useState,useContext } from "react";
import { getRemainingTimeUntilMsTimestamp } from "./CountdownTimerUtils";
import LangContext from "../../context/langContext";

const defaultRemainingTime = {
    seconds:'00',
    minutes:'00',
    hours:'00',
    days:'00',

}


const CountdownTimer = ({countdownTimestampMs}:any) =>{
    const ctx = useContext(LangContext)
    const [remainingTime,SetRemainingTime] = useState(defaultRemainingTime);

    useEffect (()=>{
        const interValid = setInterval (()=>{
            uptadeRemainingTime(countdownTimestampMs);
        },1000);
        return ()=> clearInterval(interValid);
    },[countdownTimestampMs]);

    function uptadeRemainingTime (countdown:any) {
        SetRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="countdown py-2">
        <div className="count">
            <span className="cdown">{remainingTime.days}</span>
            <span className="cdown">{ctx.lang.countdown.days}</span>
            <span className="cdown">{remainingTime.hours}</span>
            <span className="cdown">{ctx.lang.countdown.hours}</span>
            <span className="cdown">{remainingTime.minutes}</span>
            <span className="cdown">{ctx.lang.countdown.min}</span>
            <span className="cdown">{remainingTime.seconds}</span>
            <span className="cdown">{ctx.lang.countdown.sec}</span>
        </div>
        </div>
                </div>
            </div>
        </div>

    )
}

export default CountdownTimer