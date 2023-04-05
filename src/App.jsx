import CompassData from "./components/compassData/CompassData"
import styled from "styled-components"
import AppInterface from "./components/AppInterface/AppInterface"
import { useState } from "react"
import CompassIndicators from "./components/Compass/CompassIndicators"

const Background = styled.div`
background: black;
display: flex;
justify-content:center;
color: white;`

function App() {

  const [ObservedDegree, setObservedDegree] = useState(0)
  const [ChosenDegree, setChosenDegree] = useState(0)
  const [ChosenWindDegree, setChosenWindDegree] = useState(0)
  const [viewCap, setviewCap] = useState(true)

  return (
    <div>
      < Background>
        < AppInterface />
        <CompassIndicators ObservedDegree={ObservedDegree} setObservedDegree={setObservedDegree} setChosenDegree={setChosenDegree} viewCap={viewCap} setChosenWindDegree={setChosenWindDegree} />
        < CompassData ObservedDegree={ObservedDegree} ChosenDegree={ChosenDegree} viewCap={viewCap} setviewCap={setviewCap} ChosenWindDegree={ChosenWindDegree} />
      </ Background>
    </div>
  )
}

export default App
