import React from 'react';
import styled from 'styled-components';


const CompassDataBox = styled.div`
width: 25%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`

const ParagraphBox = styled.p`
margin:0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`

const ValidateButton = styled.button`
margin-top:10px;
padding: 10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`


const CompassData = ({ ObservedDegree, ChosenDegree, viewCap, setviewCap, ChosenWindDegree, defineTack, defineAllure }) => {

    const handleClick = () => {
        viewCap ?
            setviewCap(false) :
            (defineTack(ChosenDegree, ChosenWindDegree),
                defineAllure(ChosenDegree, ChosenWindDegree))
    }

    return (
        <CompassDataBox>
            <ParagraphBox>Cap {viewCap ? "bateau" : "vent"} observé: {ObservedDegree} degrés</ParagraphBox>
            <ParagraphBox>Cap bateau choisi: {ChosenDegree} degrés</ParagraphBox>
            <ParagraphBox>Cap vent choisi: {ChosenWindDegree} degrés</ParagraphBox>
            <ValidateButton
                onClick={() => handleClick()}
            >Valider le cap</ValidateButton>
        </CompassDataBox>
    );
};

export default CompassData;