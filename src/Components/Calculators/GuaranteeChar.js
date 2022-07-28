/*
    Calculates rolls/primogems needed to guarantee 5* and event banner 5* based on
     total user primo count, int. fate count, and character event pity.
     Includes checkbox to determine guaranteed banner 5* calculation used
*/

import React, {useState} from "react";
export default function GuaranteeChar ({totalPrimoCount, intFateCount, charCount}) {
    
    const [isChecked, setChecked] = useState(false);

    let rollsToFiveStar = 90 - charCount;
    let primosForFiveStar = 14400 - (charCount * 160);

    //checks if isChecked is true/false; if true, use first value. Otherwise use alt calculation equation
    let rollstoGuaranteed = isChecked ? rollsToFiveStar : (180 - charCount);
    let primosForGuaranteed =  isChecked ? primosForFiveStar : 28800 - (charCount * 160);

    let primosNeeded = primosForFiveStar - (totalPrimoCount + (intFateCount * 160));
    let primosNeededGuaranteed = primosForGuaranteed - (totalPrimoCount + (intFateCount * 160));
    const handleBannerCheck = (e) => {
        setChecked(current => !current);
    };
    return (
        <div className="calc_wrapper">
            <h1 className="section_header">Character Event Wish</h1>
            <p className="desc">
                How many wishes or primogems you need to hit full pity in the Character Event Wish banner
            </p>
            <div className="content_fields">
                <div className="content_field"> 
                    <label className="calc_label">
                        Wishes to Guaranteed 5*
                    </label>
                    <input className="num_input" type="number" value={rollsToFiveStar && Math.max(0, rollsToFiveStar)} readOnly></input>
                </div>

                <div className="content_field"> 
                    <label className="calc_label">
                        Total Primogems Required
                    </label>
                    <input className="num_input" type="number" value={primosForFiveStar && Math.max(0, primosForFiveStar)} readOnly></input>
                </div>

                <div className="content_field"> 
                    <label className="calc_label">
                        Remaining Primogems Needed
                    </label>                        
                    <input className="num_input" type="number" value={primosNeeded && Math.max(0, primosNeeded)} readOnly></input>
                </div>
                <br></br>
                <div className="content_field"> 
                    <label className="calc_label">
                        Wishes to Guaranteed Banner 5* 
                    </label>
                    <input className="num_input" type="number" value={rollstoGuaranteed && Math.max(0, rollstoGuaranteed)} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Total Primogems Required
                    </label>
                    <input className="num_input" type="number" value={primosForGuaranteed && Math.max(0, primosForGuaranteed)} readOnly></input>
                </div>

                <div className="content_field"> 
                    <label className="calc_label">
                        Remaining Primogems Needed
                    </label>
                    <input className="num_input" type="number" value={primosNeededGuaranteed && Math.max(0, primosNeededGuaranteed)} readOnly></input>
                </div>
                <div className="calc_checkbox"> 
                    <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleBannerCheck}/>
                    <br></br>
                    <label className="calc_label_checkbox">
                        Last 5* was not the banner character
                    </label>
                </div>
            </div>
        </div>
    );
}