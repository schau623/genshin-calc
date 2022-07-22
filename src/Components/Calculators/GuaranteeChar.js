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
        <div>
            <h1>Character Event Wish</h1>
            <p>
                How many wishes or primogems you need to hit full pity in the Character Event Wish banner
            </p>
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
            <br></br>
            <label>
                Remaining Primogems Needed
                <br></br>
                <input type="number" value={primosNeeded && Math.max(0, primosNeeded)} readOnly></input>
            </label>
            <br></br>
            <br></br>
            <label>
                Wishes to Guaranteed Banner 5* 
                <br></br>
                <input type="number" value={rollstoGuaranteed && Math.max(0, rollstoGuaranteed)} readOnly></input>
            </label>
            <br></br>
            <label>
                Total Primogems Required
                <br></br>
                <input type="number" value={primosForGuaranteed && Math.max(0, primosForGuaranteed)} readOnly></input>
            </label>
            <br></br>
            <label>
                Remaining Primogems Needed
                <br></br>
                <input type="number" value={primosNeededGuaranteed && Math.max(0, primosNeededGuaranteed)} readOnly></input>
            </label>
            <br></br>
            <label>
                <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleBannerCheck}></input>
                Last 5* was not the banner character
            </label>
            
        </div>
    );
}