import React, {useEffect} from "react";
import InputFields from "../inputFields/InputFields";

export default function RollCounts() {
    let eventRollCount = (InputFields.primoCount/160) + InputFields.intFateCount;
    let stdRollCount =  (InputFields.primoCount/160) + InputFields.stdCount;

    return (
        <div>
            <h1>
                Roll Count
            </h1>
            <label >
                Event (Character, Weapon)
                <br></br>
                <input type="number" value={eventRollCount} readOnly/>
            </label>
            <br></br>
            <label>
                Standard
                <br></br>
                <input type="number" value={stdRollCount} readOnly/>
            </label>
        </div>
    );
}