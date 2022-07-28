import React, {useState} from 'react';
import InputFields from "../Components/inputFields/InputFields";
import Calculators from "../Components/Calculators/Calculators";
import Footer from "../Components/Footer/Footer";
import Navbar from '../Components/NavBar/Navbar';
import "../styles/home.css"
/* 
    Main page - calculators and user input fields
*/
export default function Home (){
    const [primoCount, setPrimoCount] = useState(0);
    const [genCount, setGenCount] = useState(0); //genesis crystal
    
    const [intFateCount, setIntFateCount] = useState(0);
    const [acqFateCount, setAcqFateCount] = useState(0);
    
    const [charCount, setCharCount] = useState(0); //character event pity
    const [weapCount, setWeapCount] = useState(0); //weapon event pity
    const [stdCount, setStdCount] = useState(0); //standard pity

    return (
        <>
            <div className = "home">
                <Navbar/>
                <div className="sidebar">
                    <InputFields 
                        setPrimoCount = {setPrimoCount} 
                        setGenCount = {setGenCount}
                        setIntFateCount = {setIntFateCount}
                        setAcqFateCount = {setAcqFateCount}
                        setCharCount = {setCharCount}
                        setWeapCount = {setWeapCount}
                        setStdCount = {setStdCount}
                    />
                </div>
                <div className="content">
                    <Calculators 
                        primoCount = {primoCount}
                        genCount = {genCount}
                        intFateCount = {intFateCount}
                        acqFateCount = {acqFateCount}
                        charCount = {charCount}
                        weapCount = {weapCount}
                        stdCount = {stdCount}
                    />
                    <Footer/>
                </div>
            </div>
            
        </>
    );
}