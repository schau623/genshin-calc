import React, {useState} from "react";
export default function GuaranteeChar ({totalPrimoCount, intFateCount, charCount}) {
    
    const [isChecked, setChecked] = useState(false);

    let rollsToFiveStar = 90 - charCount;
    let primosForFiveStar = 14400 - (charCount * 160);

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
            <label>
                Rolls to 5*
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
                Rolls to guaranteed banner 5* 
                <br></br>
                <input type="number" value={rollstoGuaranteed} readOnly></input>
            </label>
            <br></br>
            <label>
                Total Primogems Required
                <br></br>
                <input type="number" value={primosForGuaranteed} readOnly></input>
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
                Last 5* was banner character
            </label>
            
        </div>
    );
}