import React from 'react';
import CompassIndicators from './CompassIndicators/CompassIndicators';



const Compass = ({ degree, setDegree }) => {
    return (
        <div className='clock'>
            <CompassIndicators degree={degree} setDegree={setDegree} />
        </div>
    );
};

export default Compass;