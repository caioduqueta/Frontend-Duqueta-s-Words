
import { Container, FirstDiv, InputDiv, CheckBoxForm } from "./styles";

export function MainBox(){
  return(
    <Container>
      <FirstDiv>
      <h3>Choose Your Word:</h3>
      <button
      type="button">
        Ready
      </button>
      </FirstDiv>
      <InputDiv>
      <input type="text" placeholder="Type here your word..." />
      </InputDiv>
      <CheckBoxForm> {/*Adicionar ACTION depois*/}
      
      <div>
        <input type="checkbox" id="lowercase"/>
        <label htmlFor="lowercase">Accepts lowercase.</label>
      </div>
      <div>
        <input type="checkbox" id="no-accentuation"/>
        <label htmlFor="accentuation">Accepts no accentuation.</label>
      </div>
      <div>
        <input type="checkbox" id="no-hiphen"/>
        <label htmlFor="no-hyphen">Accepts no hyphen.</label>
      </div>
      </CheckBoxForm>
    </Container>
    

  )
}