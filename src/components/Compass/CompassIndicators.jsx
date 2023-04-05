import { useState } from 'react';
import "./CompassIndicators.scss"
import { nanoid } from 'nanoid';

const CompassIndicators = ({ ObservedDegree, setObservedDegree, setChosenDegree, viewCap, setChosenWindDegree }) => {

    const IndicatorsArray = new Array(360).fill("clock__indicator")
    const [indicators, setIndicators] = useState(IndicatorsArray)


    const handleClick = (index) => {
        if (viewCap) {
            IndicatorsArray.splice(index, 1, `clock__indicator Observed`)
            setIndicators(IndicatorsArray)
            setChosenDegree(ObservedDegree)

        } else {
            setChosenWindDegree(ObservedDegree)
            IndicatorsArray.splice(index, 1, `clock__indicator ObservedBlue`)
            setIndicators(IndicatorsArray)
        }
    }

    const GenerateClockIndicator = indicators.map((el, index) => {
        return <section className={indicators[index]}
            id="red"
            key={nanoid()}
            onMouseEnter={() => setObservedDegree(index + 1)}
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