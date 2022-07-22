import React, {useState} from "react";
export default function GuaranteeWeap ({totalPrimoCount, intFateCount, weapCount}) {
    
    const [isChecked, setChecked] = useState(false);
    const [fatePoints, setFatePoints] = useState(0);

    let rollsToFiveStar = 80 - weapCount;
    let primosForFiveStar = 12800 - (weapCount * 160);

    //checks if isChecked is true/false; if true, use first value. Otherwise use alt calculation equation
    let rollsToGuaranteed = isChecked ? rollsToFiveStar : (160 - weapCount);
    let primosForGuaranteed =  isChecked ? primosForFiveStar : 25600 - (weapCount * 160);

    let primosNeeded = primosForFiveStar - (totalPrimoCount + (intFateCount * 160));
    let primosNeededGuaranteed = primosForGuaranteed - (totalPrimoCount + (intFateCount * 160));

    let rollsToEP = fatePoints > 0 ? (240 - (fatePoints*80)) - weapCount : 240 - weapCount;
    let primosForEP = fatePoints > 0 ? ((240 - (fatePoints*80))*160) - (weapCount*160) : 38400 - (weapCount * 160);
    let primosNeededEP = primosForEP - (totalPrimoCount + (intFateCount * 160));

    const handleBannerCheck = (e) => {
        setChecked(current => !current);
    };
    
    return (
        <div>
            <h1>Weapon Event Wish</h1>
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
            {/* Guaranteed */}
            <br></br>
            <label>
                Wishes to Guaranteed Banner 5* 
                <br></br>
                <input type="number" value={ fatePoints === 2 ? (rollsToFiveStar && Math.max(0, rollsToFiveStar)) : (rollsToGuaranteed && Math.max(0, rollsToGuaranteed))} readOnly></input>
            </label>
            <br></br>
            <label>
                Total Primogems Required
                <br></br>
                <input type="number" value={ fatePoints === 2 ? (primosForFiveStar && Math.max(0, primosForFiveStar)) : (primosForGuaranteed && Math.max(0, primosForGuaranteed))} readOnly></input>
            </label>
            <br></br>
            <label>
                Remaining Primogems Needed
                <br></br>
                <input type="number" value={fatePoints === 2 ? (primosNeeded && Math.max(0, primosNeeded)) : (primosNeededGuaranteed && Math.max(0, primosNeededGuaranteed))} readOnly></input>
            </label>
            <br></br>
            <label>
                <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleBannerCheck}></input>
                Last 5* was not a banner weapon
            </label>
            <br></br>
            {/* Epitomized Path */}
            <br></br> 
            <label>
                Wishes to Epitomized Path (Chosen 5* Banner Weapon)
                <br></br>
                <input type="number" value={rollsToEP && Math.max(0, rollsToEP)} readOnly></input>
            </label>
            <br></br>
            <label>
                Total Primogems Required
                <br></br>
                <input type="number" value={primosForEP && Math.max(0, primosForEP)} readOnly></input>
            </label>
            <br></br>
            <label>
                Remaining Primogems Needed
                <br></br>
                <input type="number" value={primosNeededEP && Math.max(0, primosNeededEP)} readOnly></input>
            </label>
            <br></br>
            <label>
                Number of Fate Points
                <br></br>
                <input type="number" min={0} max={2} value={fatePoints || 0} onChange = { (e) => {
                    const tempValue = e.target.value;
                    setFatePoints(tempValue);
                }}
                readOnly>    
                </input>
                <button onClick = { (e) => {
                    if(fatePoints > 0) {
                        setFatePoints(Number(fatePoints)-1);
                    }
                }}
                > - </button>
                <button onClick = { (e) => {
                    if(fatePoints >= 0 && fatePoints < 2) {
                        setFatePoints(Number(fatePoints)+1);
                    }
                }}
                > + </button>
                
            </label>
        </div>
    );
}