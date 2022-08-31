import { Container } from "./styles"
import {ModalsContext } from "../../Context/ModalContext";
import { useContext, useState, } from "react";
import { NavLink } from "react-router-dom";

export function ChooseYourWord(){

const {CloseProfileModal, changeInput} = useContext(ModalsContext);

const [theInputHasChanged, setTheInputHasChanged] = useState("")

function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
  changeInput(event.target.value)
  setTheInputHasChanged(event.target.value)
}

function handleCloseProfileModal(){
    CloseProfileModal()
    }
  
  return(
    <Container  onClick={handleCloseProfileModal}>
    <h1>Choose Your Word</h1>
    <input 
    type="text"
    placeholder="Type here your word..."
    onChange={handleChangeInput}
    value={theInputHasChanged}
    >

    </input>
    <NavLink to="/wordcounter" title="Word Counter">
    <button 
    type="submit"
    >
      Ready
    </button>
    </NavLink>
    </Container>
  )
}