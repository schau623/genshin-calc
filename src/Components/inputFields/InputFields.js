/* 
    Input fields component
    
    All inputs are numbers (int). 
    Blank inputs are handled in Calculators.js to 
    prevent NaN errors
*/
import React, {useState} from "react";
import "./InputFields.css"
import primogem_icon from "../../images/Icon_Primogem.png";
import genCrystal_icon from "../../images/Icon_Genesis_Crystal.png"
import intFate_icon from "../../images/Icon_Intertwined_Fate.png"
import acqFate_icon from "../../images/Icon_Acquaint_Fate.png"

export default function InputFields( {setPrimoCount, setGenCount, setIntFateCount, 
                                    setAcqFateCount, setCharCount, setWeapCount, setStdCount} ) {
    const [tempPrimoCount, setTempPrimoCount] = useState(0);
    const [tempGenCount, setTempGenCount] = useState(0); //genesis crystal
    
    const [tempIntFateCount, setTempIntFateCount] = useState(0);
    const [tempAcqFateCount, setTempAcqFateCount] = useState(0);
    
    const [tempCharCount, setTempCharCount] = useState(0); //character event pity
    const [tempWeapCount, setTempWeapCount] = useState(0); //weapon event pity
    const [tempStdCount, setTempStdCount] = useState(0); //standard pity
    
    const preventPasteNegative = (e) => {
        const clipboardData = e.clipboardData || window.clipboardData;
        const pastedData = parseFloat(clipboardData.getData('text'));
    
        if (pastedData < 0) {
            e.preventDefault();
        }
    };

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    /*
    const handleEvent = (event) => {
        const newTempPrimoValue = event.target.value;
        setTempPrimoCount(newTempPrimoValue);
        setPrimoCount(newTempPrimoValue);
    };
    */
    return (
        <form className="input_form">
            <div className="input_wrapper">
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <img alt="Primogem icon" className="input_icon" src={primogem_icon}/>
                                <label htmlFor="Primogems">Primogems</label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempPrimoCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempPrimoCount(newTempValue);
                                        setPrimoCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            /> 
                        </div>
                    </div>

                </div>
                <div className="content_box"> 
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <img alt="Primogem icon" className="input_icon" src={genCrystal_icon}/>
                                <label htmlFor="Genesis Crystals">Genesis Crystals</label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempGenCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempGenCount(newTempValue);
                                        setGenCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            />  
                        </div>
                    </div>

                </div>
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field"> 
                            <div className="input_title">
                                <img alt="Primogem icon" className="input_icon" src={intFate_icon}/>
                                <label htmlFor="Intertwined Fates">Intertwined Fates </label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempIntFateCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempIntFateCount(newTempValue);
                                        setIntFateCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            />   
                        </div>
                    </div>

                </div>
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <img alt="Primogem icon" className="input_icon" src={acqFate_icon}/>
                                <label htmlFor="Acquaint Fates">Acquaint Fates</label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempAcqFateCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempAcqFateCount(newTempValue);
                                        setAcqFateCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            /> 
                        </div>
                    </div>

                </div>
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <label htmlFor="Character Event Pity">Character Event Pity</label>
                            </div>
                            
                            <input className="num_input" type="number" min={0} value={tempCharCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempCharCount(newTempValue);
                                        setCharCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            />  
                        </div>
                    </div>

                </div>
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <label htmlFor="Weapon Event Pity">Weapon Event Pity</label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempWeapCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempWeapCount(newTempValue);
                                        setWeapCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            /> 
                        </div>
                    </div>
                </div>
                
                <div className="content_box">
                    <div className="content_border">
                        <div className="content_field">
                            <div className="input_title">
                                <label htmlFor="Standard Pity">Standard Pity</label>
                            </div>
                            <input className="num_input" type="number" min={0} value={tempStdCount || ''} onChange={ (e) => 
                                    {
                                        const newTempValue = e.target.value;
                                        setTempStdCount(newTempValue);
                                        setStdCount(newTempValue);
                                    }
                                }
                                onPaste={preventPasteNegative}
                                onKeyPress={preventMinus}
                            /> 
                        </div>
                    </div>
                </div>
                <div className="content_box" id="empty">
                    
                </div>
            </div>
        </form>
    );
}

