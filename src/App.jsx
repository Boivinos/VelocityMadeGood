import Compass from "./components/Compass"
import styled from "styled-components"

const Background = styled.div`
background: black;
display: flex;
justify-content:center;`

function App() {

  return (
    <div>
      < Background>
        < Compass />
      </ Background>
    </div>
  )
}

export default App
