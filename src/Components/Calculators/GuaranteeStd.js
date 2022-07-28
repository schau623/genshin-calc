/*
    Calculates rolls/primogems needed to guarantee 5* in standard banner
    given user standard pity.
*/

import React from "react";

export default function GuaranteeStd ({stdCount}) {
    let rollsToFiveStar = 90 - stdCount;
    let primosForFiveStar = 14400 - (stdCount * 160);

    return (
        <div className="calc_wrapper">
            <h1 className="section_header">Standard Wish</h1>
            <p className="desc">How many wishes or primogems you need to hit full pity in the Standard Wish banner</p>
            <div className="content_fields">
                <div className="content_field"> 
                    <label className="calc_label">
                        Wishes to Guaranteed 5*
                        <br></br>
                    </label>
                    <input className="num_input" type="number" value={rollsToFiveStar && Math.max(0, rollsToFiveStar)} readOnly></input>
                </div>
                
                <div className="content_field"> 
                    <label className="calc_label">
                        Total Primogems Required
                        <br></br>    
                    </label>
                    <input className="num_input" type="number" value={primosForFiveStar && Math.max(0, primosForFiveStar)} readOnly></input>
                </div>
            </div>
        </div>
    );
}