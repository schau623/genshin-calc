import React from "react";

export default function RollCounts( {totalPrimoCount, intFateCount, 
    acqFateCount, charCount, weapCount} ) {
    
    let eventRollCount = Math.floor(totalPrimoCount / 160) + intFateCount;
    let stdRollCount = Math.floor(totalPrimoCount / 160) + acqFateCount;

    return (
        <div className="calc_wrapper">
            <h1 className="section_header">
                Total Wish Count
            </h1>
            <p className="desc">How many wishes you can perform with your current amount of primogems and fates</p>
            <div className="content_fields">
                <div className="content_field">
                    <label className="calc_label">
                        Event (Character, Weapon)
                        <br></br>
                    </label>
                    <input className="num_input" type="number" min={0} value={eventRollCount} readOnly/>
                </div>
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
                */}
                <div className="content_field">
                    <label className="calc_label">
                        Standard
                        <br></br>    
                    </label>
                    <input className="num_input" type="number" min={0} value={stdRollCount} readOnly/>
                </div>
            </div>
        </div>
    );
}