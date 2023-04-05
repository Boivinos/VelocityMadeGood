import Compass from "./components/Compass/Compass"
import CompassData from "./components/compassData/CompassData"
import styled from "styled-components"
import AppInterface from "./components/AppInterface/AppInterface"
import { useState } from "react"

const Background = styled.div`
background: black;
display: flex;
justify-content:center;
color: white;`

function App() {

  const [degree, setDegree] = useState(0)

  return (
    <div>
      < Background>
        < AppInterface />
        < Compass degre={degree} setDegree={setDegree} />
        < CompassData degree={degree} setDegree={setDegree} />
      </ Background>
    </div>
  )
}

export default App
