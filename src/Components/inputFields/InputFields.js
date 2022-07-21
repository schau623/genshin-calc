/* 
    Input fields component
    
    All inputs are numbers (int). 
    Blank inputs are handled in Calculators.js to 
    prevent NaN errors
*/
import React, {useState} from "react";

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
        <form>
            <label htmlFor="labelTitle">
                Primogems
                <br></br>
               <input type="number" min={0} value={tempPrimoCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempPrimoCount(newTempValue);
                        setPrimoCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                /> 
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Genesis Crystals
                <br></br>
               <input type="number" min={0} value={tempGenCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempGenCount(newTempValue);
                        setGenCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                />  
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Intertwined Fates
                <br></br>
               <input type="number" min={0} value={tempIntFateCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempIntFateCount(newTempValue);
                        setIntFateCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                />   
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Acquaint Fates
                <br></br>
               <input type="number" min={0} value={tempAcqFateCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempAcqFateCount(newTempValue);
                        setAcqFateCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                /> 
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Character Event Pity
                <br></br>
               <input type="number" min={0} value={tempCharCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempCharCount(newTempValue);
                        setCharCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                />  
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Weapon Event Pity
                <br></br>
               <input type="number" min={0} value={tempWeapCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempWeapCount(newTempValue);
                        setWeapCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                /> 
            </label><br></br>
            
            <label htmlFor="labelTitle">
                Standard Pity
                <br></br>
               <input type="number" min={0} value={tempStdCount || ''} onChange={ (e) => 
                    {
                        const newTempValue = e.target.value;
                        setTempStdCount(newTempValue);
                        setStdCount(newTempValue);
                    }
                }
                onPaste={preventPasteNegative}
                onKeyPress={preventMinus}
                /> 
            </label><br></br>
        </form>
    );
}

