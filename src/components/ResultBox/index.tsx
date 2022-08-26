import { Container, ButtonWinner, Winner } from "./styles"
import { useState } from "react"

export function ResultBox(){

const [isButtonClicked, setIsButtonClicked] = useState(false)


  return(
    <Container>
      { //ISSO É UM IF SIMPLES
      isButtonClicked 
      ? 
      <Winner>
        <p>
        The Winner is...
        </p>
        <div>

        </div>
      </Winner>
      :
      <ButtonWinner>
        <button type="button"
        onClick={() => setIsButtonClicked(!isButtonClicked)}>
        Choose a Winner  
        </button>
      </ButtonWinner>
      }
    </Container>

  )
}