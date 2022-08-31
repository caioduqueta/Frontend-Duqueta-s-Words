
import { useContext, useEffect, useState } from "react";
import { ModalsContext } from "../../Context/ModalContext";
import { Container, FirstDiv, InputDiv, CheckBoxDiv } from "./styles";

export function MainBox(){

  const {changeInput, isInputChange} = useContext(ModalsContext);
  const [theInputHasChanged, setTheInputHasChanged] = useState(isInputChange)
  
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    changeInput(event.target.value)
    setTheInputHasChanged(event.target.value)
  }
  useEffect(() => {
     setTheInputHasChanged(isInputChange)
},[isInputChange])

  return(
    <Container>
      <FirstDiv>
      <h3>Choose Your Word:</h3>
      <button
      type="submit">
        Ready
      </button>
      </FirstDiv>
      <InputDiv>
      <input
      type="text"
      placeholder="Type here your word..."
      onChange={handleChangeInput}
      value={theInputHasChanged}
      />
      </InputDiv>
      <CheckBoxDiv> {/*Adicionar ACTION depois*/}
      
      <div>
        <input type="checkbox" id="lowercase"/>
        <label htmlFor="lowercase">Accepts lowercase.</label>
      </div>
      <div>
        <input type="checkbox" id="no-accentuation"/>
        <label htmlFor="no-accentuation">Accepts no accentuation.</label>
      </div>
      <div>
        <input type="checkbox" id="no-hiphen"/>
        <label htmlFor="no-hyphen">Accepts no hyphen.</label>
      </div>
      </CheckBoxDiv>
    </Container>
    

  )
}