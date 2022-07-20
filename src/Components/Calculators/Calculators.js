import React from "react";
import GuaranteeChar from "./GuaranteeChar";
import GuaranteeWeap from "./GuaranteeWeap";
import GuaranteeStd from "./GuaranteeStd";
import RollCounts from "./RollCounts";
import InputFields from "../inputFields/InputFields";

export default function Calculators () {
    
    return (
        <div>
            <div>
                <RollCounts/>
            </div>
            <button onClick={RollCounts}>Calculate</button>
        </div>
    );
}