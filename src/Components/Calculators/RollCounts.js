import React from "react";

export default function RollCounts( {totalPrimoCount, intFateCount, 
    acqFateCount, charCount, weapCount} ) {
    
    let eventRollCount = Math.floor(totalPrimoCount / 160) + intFateCount;
    let stdRollCount = Math.floor(totalPrimoCount / 160) + acqFateCount;

    return (
        <div>
            <h1>
                Total Wish Count
            </h1>
            <p>How many wishes you can perform with your current amount of primogems and fates</p>
            <label>
                Event (Character, Weapon)
                <br></br>
                <input type="number" min={0} value={eventRollCount} readOnly/>
            </label>
            <br></br> 
            {/*
            <label>
                Character Event (Including Pity)
                <br></br>
                <input type="number" min={0} value={(eventRollCount+charCount)} readOnly/>
            </label>
            <br></br> 
            <label>
                Weapon Event (Including Pity)
                <br></br>
                <input type="number" min={0} value={(eventRollCount+weapCount)} readOnly/>
            </label>
            <br></br> 
            */}<label>
                Standard
                <br></br>
                <input type="number" min={0} value={stdRollCount} readOnly/>
            </label>
        </div>
    );
}