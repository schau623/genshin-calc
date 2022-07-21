import React from "react";

export default function RollCounts( {totalPrimoCount, intFateCount, 
    acqFateCount} ) {
    
    let eventRollCount = Math.floor(totalPrimoCount / 160) + intFateCount;
    let stdRollCount = Math.floor(totalPrimoCount / 160) + acqFateCount;

    return (
        <div>
            <h1>
                Roll Count
            </h1>
            <label>
                Event (Character, Weapon)
                <br></br>
                <input type="number" min={0} value={eventRollCount} readOnly/>
            </label>
            <br></br> 
            <label>
                Standard
                <br></br>
                <input type="number" min={0} value={stdRollCount} readOnly/>
            </label>
        </div>
    );
}