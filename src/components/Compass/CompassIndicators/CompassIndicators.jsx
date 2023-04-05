import React from 'react';
import "./CompassIndicators.scss"
import { nanoid } from 'nanoid';

const CompassIndicators = ({ degree, setDegree }) => {

    const IndicatorsArray = new Array(360).fill("el")
    const GenerateClockIndicator = IndicatorsArray.map((el, index) => {
        return <section className="clock__indicator"
            id={index}
            key={nanoid()}
            onMouseEnter={() => setDegree(index + 1)} ></section >
    })

    return (
        <div>
            {GenerateClockIndicator}
            <section className="clock__indicator"></section>

        </div>
    );
};

export default CompassIndicators;