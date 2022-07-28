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
        <div className="calc_wrapper">
            <div className="calc_header">
               <h1 className="section_header">Weapon Event Wish</h1>
                <p className="desc">
                    How many wishes or primogems you need to hit full pity in the Character Event Wish banner
                </p> 
            </div>
            
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

                {/* Guaranteed */}
                <div className="content_field">
                    <label className="calc_label">
                        Wishes to Guaranteed Banner 5* 
                    </label>
                    <input className="num_input" type="number" value={ fatePoints === 2 ? (rollsToFiveStar && Math.max(0, rollsToFiveStar)) : (rollsToGuaranteed && Math.max(0, rollsToGuaranteed))} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Total Primogems Required
                        </label>
                    <input className="num_input" type="number" value={ fatePoints === 2 ? (primosForFiveStar && Math.max(0, primosForFiveStar)) : (primosForGuaranteed && Math.max(0, primosForGuaranteed))} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Remaining Primogems Needed
                    </label>
                    <input className="num_input" type="number" value={fatePoints === 2 ? (primosNeeded && Math.max(0, primosNeeded)) : (primosNeededGuaranteed && Math.max(0, primosNeededGuaranteed))} readOnly></input>
                 </div>

                <div className="calc_checkbox">
                    <input type="checkbox" className="checkbox" checked={isChecked} onChange={handleBannerCheck}/>
                    <br></br>
                    <label className="calc_label_checkbox">
                        Last 5* was not a banner weapon
                    </label>
                </div>

                {/* Epitomized Path */}
                <div className="content_field">
                    <label className="calc_label">
                        Wishes to Epitomized Path (Chosen 5* Banner Weapon)
                    </label>
                    <input className="num_input" type="number" value={rollsToEP && Math.max(0, rollsToEP)} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Total Primogems Required
                    </label>
                    <input className="num_input" type="number" value={primosForEP && Math.max(0, primosForEP)} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Remaining Primogems Needed
                    </label>
                    <input className="num_input" type="number" value={primosNeededEP && Math.max(0, primosNeededEP)} readOnly></input>
                </div>

                <div className="content_field">
                    <label className="calc_label">
                        Number of Fate Points
                    </label>

                    <input className="num_input" type="number" min={0} max={2} value={fatePoints || 0} onChange = { (e) => {
                        const tempValue = e.target.value;
                        setFatePoints(tempValue);
                    }}
                    readOnly>    
                    </input>
                    <br></br>
                    <div className="calc_btns">
                        <button className="calc_btn" onClick = { (e) => {
                            if(fatePoints > 0) {
                                setFatePoints(Number(fatePoints)-1);
                            }
                        }}
                        > - </button>

                        <button className="calc_btn" onClick = { (e) => {
                            if(fatePoints >= 0 && fatePoints < 2) {
                                setFatePoints(Number(fatePoints)+1);
                            }
                        }}
                        > + </button>
                    </div>
                </div>
            </div>
        </div>
    );
}