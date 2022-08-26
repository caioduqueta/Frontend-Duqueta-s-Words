import { Container } from "./styles"

export function ChooseYourWord(){
  return(
    <Container>
    <h1>Choose Your Word</h1>
    <input 
    type="text"
    placeholder="Type here your word..."
    >

    </input>
    <button 
    type="submit"
    >
      Ready
    </button>
    </Container>
  )
}