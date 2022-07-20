import React from 'react';
import InputFields from "../Components/inputFields/InputFields";
import Calculators from "../Components/Calculators/Calculators";

/* 
    Main page - calculators and user input fields
*/
export default function Home (){
    return (
        <>
            <div className = "home_page">
                <InputFields/>
                <Calculators/>
            </div>
        </>
    );
}