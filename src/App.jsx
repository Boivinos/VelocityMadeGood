import CompassData from "./components/compassData/CompassData"
import styled from "styled-components"
import AppInterface from "./components/AppInterface/AppInterface"
import { useState } from "react"
import CompassIndicators from "./components/Compass/CompassIndicators"

const Background = styled.div`
background: black;
display: flex;
flex-direction:column;
justify-content:space-between;
color: white;
height:100vh;`

const MainContentBox = styled.div`
display: flex;
justify-content:center;
height: 70%;
`
const SecondContentBox = styled.div`
display: flex;
justify-content:center;
align-items:center;
height: 30%;
`

function App() {

  const [ObservedDegree, setObservedDegree] = useState("")
  const [ChosenDegree, setChosenDegree] = useState("")
  const [ChosenWindDegree, setChosenWindDegree] = useState("")
  const [viewCap, setviewCap] = useState(true)
  const [tack, setTack] = useState("")
  const [allure, setAllure] = useState("")
  const IndicatorsArray = new Array(360).fill("clock__indicator")
  const [indicators, setIndicators] = useState(IndicatorsArray)

  function defineTack(boatDegree, windDegree) {
    if (boatDegree > 0 && boatDegree < 180) {
      if (windDegree > boatDegree && windDegree < boatDegree + 180) {
        setTack("tribord")
      } else setTack("babord")
    }
    else if (boatDegree < 360 && boatDegree > 180) {
      if (windDegree < boatDegree && windDegree > boatDegree - 180) {
        setTack("babord")
      } else setTack("tribord")
    }
  }

  function defineAllure(boatDegree, windDegree) {
    const capDifference = Math.abs(boatDegree - windDegree) > 180 ? 360 - Math.max(boatDegree, windDegree) + Math.min(boatDegree, windDegree) :
      Math.abs(boatDegree - windDegree)
    if (capDifference < 40) {
      setAllure("vous serrez trop le vent")
    } else if (capDifference < 60) {
      setAllure("vous êtes au près")
    } else if (capDifference < 100) {
      setAllure("vous êtes au travers")
    }
    else if (capDifference < 140) {
      setAllure("vous êtes au largue")
    } else { setAllure("vous êtes au grand largue") }
  }

  function resetData() {
    setAllure("")
    setTack("")
    setChosenDegree(0)
    setChosenWindDegree(0)
    setIndicators(IndicatorsArray)
    setviewCap(true)
  }

  return (
    <div>
      < Background>
        < MainContentBox>
          < AppInterface tack={tack} allure={allure} resetData={resetData} />
          <CompassIndicators indicators={indicators} setIndicators={setIndicators} IndicatorsArray={IndicatorsArray} ObservedDegree={ObservedDegree} setObservedDegree={setObservedDegree} setChosenDegree={setChosenDegree} viewCap={viewCap} setChosenWindDegree={setChosenWindDegree} />
          < CompassData ObservedDegree={ObservedDegree} ChosenDegree={ChosenDegree} viewCap={viewCap} setviewCap={setviewCap} ChosenWindDegree={ChosenWindDegree} defineTack={defineTack} defineAllure={defineAllure} />
        </MainContentBox>
        < SecondContentBox>
          Pouet !
        </SecondContentBox>
      </ Background>
    </div>
  )
}

export default App
