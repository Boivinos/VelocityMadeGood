import { useState } from 'react';
import "./CompassIndicators.scss"
import { nanoid } from 'nanoid';

const CompassIndicators = ({ ObservedDegree, setObservedDegree, setChosenDegree, viewCap, setChosenWindDegree, IndicatorsArray, indicators, setIndicators }) => {

    const handleClick = (index) => {

        if (viewCap) {
            IndicatorsArray.splice(index, 1, `clock__indicator Observed`)
            setIndicators(IndicatorsArray)
            setChosenDegree(ObservedDegree)
        } else {
            const updatedArray = indicators.map((el) => el === `clock__indicator ObservedBlue` ? el = "`clock__indicator`" : el = el)
            setChosenWindDegree(ObservedDegree)
            updatedArray.splice(index, 1, `clock__indicator ObservedBlue`)
            setIndicators(updatedArray)
        }
    }

    const GenerateClockIndicator = indicators.map((el, index) => {
        return <section className={indicators[index]}
            id="red"
            key={nanoid()}
            onMouseEnter={() => index + 1 === 360 ? setObservedDegree(0) : setObservedDegree(index + 1)}
            onClick={() => handleClick(index)} ></section >
    })

    const GenerateClockIndicatorBlue = indicators.map((el, index) => {
        return <section className={indicators[index]}
            id="blue"
            key={nanoid()}
            onMouseEnter={() => setObservedDegree(index + 1)}
            onClick={() => handleClick(index)}
        ></section >
    })

    return (
        <div className='clock'>
            {viewCap ? GenerateClockIndicator : GenerateClockIndicatorBlue}
            <section className="clock__indicator"></section>

        </div>
    );
};

export default CompassIndicators;