/*
    Calculates rolls/primogems needed to guarantee 5* in standard banner
    given user standard pity.
*/

import React from "react";

export default function GuaranteeStd ({stdCount}) {
    let rollsToFiveStar = 90 - stdCount;
    let primosForFiveStar = 14400 - (stdCount * 160);

    return (
        <div>
            <h1>Standard Wish</h1>
            <p>How many wishes or primogems you need to hit full pity in the Standard Wish banner</p>
            <label>
                Wishes to Guaranteed 5*
                <br></br>
                <input type="number" value={rollsToFiveStar && Math.max(0, rollsToFiveStar)} readOnly></input>
            </label>
            <br></br>
            <label>
                Total Primogems Required
                <br></br>
                <input type="number" value={primosForFiveStar && Math.max(0, primosForFiveStar)} readOnly></input>
            </label>
        </div>
    );
}