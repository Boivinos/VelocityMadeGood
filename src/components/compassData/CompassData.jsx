import React from 'react';
import styled from 'styled-components';


const CompassDataBox = styled.div`
width: 25%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`


const CompassData = ({ degree, setDegree }) => {
    return (
        <CompassDataBox>
            <p>Cap: {degree} degrés</p>
            <p>pouet !</p>
        </CompassDataBox>
    );
};

export default CompassData;