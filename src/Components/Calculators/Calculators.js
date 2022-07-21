/* 
    Contains all input processing components
*/
import React from "react";
import GuaranteeChar from "./GuaranteeChar";
import GuaranteeWeap from "./GuaranteeWeap";
import GuaranteeStd from "./GuaranteeStd";
import RollCounts from "./RollCounts";
import InputFields from "../inputFields/InputFields";

export default function Calculators ( {primoCount, genCount, intFateCount, 
                                    acqFateCount, charCount, weapCount, stdCount} ) {
    primoCount = parseInt(primoCount);
    primoCount = !primoCount && primoCount !== 0 ? 0 : primoCount; //protect against NaN error

    genCount = parseInt(genCount);
    genCount = !genCount && genCount !== 0 ? 0 : genCount;

    intFateCount = parseInt(intFateCount);
    intFateCount = !intFateCount && intFateCount !== 0 ? 0 : intFateCount;

    acqFateCount = parseInt(acqFateCount);
    acqFateCount = !acqFateCount && acqFateCount !== 0 ? 0 : acqFateCount;

    charCount = parseInt(charCount);
    charCount = !charCount && charCount !== 0 ? 0 : charCount;

    weapCount = parseInt(weapCount);
    weapCount = !weapCount && weapCount !== 0 ? 0 : weapCount;

    stdCount = parseInt(stdCount);
    stdCount = !stdCount && stdCount !== 0 ? 0 : stdCount;
    

    let totalPrimoCount = primoCount + genCount;
    
    return (
        <div>
            <div>
                <GuaranteeChar 
                totalPrimoCount = {totalPrimoCount}
                intFateCount = {intFateCount}
                charCount = {charCount}
                />
            </div>
            <div>
                <GuaranteeStd
                
                />
            </div>
            <div>
                <RollCounts 
                totalPrimoCount = {totalPrimoCount}
                intFateCount = {intFateCount}
                acqFateCount = {acqFateCount}
                charCount = {charCount}
                weapCount = {weapCount}
                stdCount = {stdCount}
                />
            </div>
        </div>
    );
}