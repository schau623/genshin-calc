import React, {useState, useEffect} from "react";

export default function InputFields() {
    const [primoCount, setPrimoCount] = useState(0);
    const [genCount, setGenCount] = useState(0); //genesis crystal
    
    const [intFateCount, setIntFateCount] = useState(0);
    const [acqFateCount, setAcqFateCount] = useState(0);
    
    const [charCount, setCharCount] = useState(0); //character event pity
    const [weapCount, setWeapCount] = useState(0); //weapon event pity
    const [stdCount, setStdCount] = useState(0); //standard pity
    
    useEffect(()=> {
        console.log(typeof(primoCount));    
    }, [primoCount, genCount, intFateCount, acqFateCount, charCount, weapCount, stdCount]);

    return (
        <form>
            <label htmlFor="labelTitle">
                Primogems
                <br></br>
               <input type="number" min={0} value={primoCount} onChange={e => setPrimoCount(e.target.value)
            }/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Genesis Crystals
                <br></br>
               <input type="number" min={0} value={genCount} onInput={e => setGenCount(e.target.value)}/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Intertwined Fates
                <br></br>
               <input type="number" min={0} value={intFateCount} onInput={e => setIntFateCount(e.target.value)}/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Acquaint Fates
                <br></br>
               <input type="number" min={0} value={acqFateCount} onInput={e => setAcqFateCount(e.target.value)}/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Character Event Pity
                <br></br>
               <input type="number" min={0} value={charCount} onInput={e => setCharCount(e.target.value)}/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Weapon Event Pity
                <br></br>
               <input type="number" min={0} value={weapCount} onInput={e => setWeapCount(e.target.value)}/> 
            </label><br></br>

            <label htmlFor="labelTitle">
                Standard Pity
                <br></br>
               <input type="number" min={0} value={stdCount} onInput={e => setStdCount(e.target.value)}/> 
            </label><br></br>
        </form>
    );
}

