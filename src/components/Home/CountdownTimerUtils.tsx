import dayjs from "dayjs";

export function getRemainingTimeUntilMsTimestamp(timestampMs: string | number | Date | dayjs.Dayjs | null | undefined){
    const timestampDayjs:any = dayjs(timestampMs);
    const nowDayjs:any = dayjs();
    // if(timestampDayjs.isBefore(nowDayjs)){
    //     return{
    //         seconds:'00',
    //         minutes:'00',
    //         hours:'00',
    //         days:'00',
    //     }
    // }
    return {
        seconds: getRemainingSeconds(nowDayjs,timestampDayjs),
        minutes : getRemainingMinutes(nowDayjs,timestampDayjs),
        hours : getRemainingHours(nowDayjs,timestampDayjs),
        days : getRemainingDays(nowDayjs,timestampDayjs),
    };
}

function getRemainingSeconds(nowDayjs: any, timestampDayjs: { diff: (arg0: any, arg1: string) => number; }) {
    const seconds = timestampDayjs.diff(nowDayjs,'seconds') % 60;
    return padWithZeros(seconds, 2);}

function getRemainingMinutes(nowDayjs: any,timestampDayjs: { diff: (arg0: any, arg1: string) => number; }) {
    const minutes = timestampDayjs.diff(nowDayjs,'minutes') % 60;
    return padWithZeros(minutes, 2);
}

function getRemainingHours(nowDayjs: any,timestampDayjs: { diff: (arg0: any, arg1: string) => number; }) {
    const hours = timestampDayjs.diff(nowDayjs,'hours') % 24;
    return padWithZeros(hours, 2);
}


function getRemainingDays(nowDayjs: any,timestampDayjs: { diff: (arg0: any, arg1: string) => any; }) {
    const days = timestampDayjs.diff(nowDayjs,'days') ;
    return days.toString();
}

function padWithZeros(number: number, minLength: number) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) +  numberString;
}
