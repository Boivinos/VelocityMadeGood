import React from 'react';
import styled from 'styled-components';

const AppInterfaceBox = styled.div`
width: 25%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const ParagraphBox = styled.p`
margin:0;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align:center;`

const ResetButton = styled.button`
margin-top:10px;
padding: 10px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;`

const AppInterface = ({ tack, allure, resetData }) => {


    return (
        <AppInterfaceBox>
            <ParagraphBox>Validez le cap bateau et vent pour connaitre l'amure et l'allure</ParagraphBox>
            <ParagraphBox>Votre amure : {tack} </ParagraphBox>
            <ParagraphBox>Votre allure : {allure} </ParagraphBox>
            <ResetButton
                onClick={resetData}>Remettre à zéro</ResetButton>

        </AppInterfaceBox>
    );
};

export default AppInterface;