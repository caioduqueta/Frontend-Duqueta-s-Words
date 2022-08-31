import { ModalsContext } from "../../Context/ModalContext";
import { useContext, useState } from "react"
import Modal from "react-modal"
import {Container, Content} from "./styles"
import { CaretRight, GlobeSimple, Moon, Check, SignIn, SignOut } from "phosphor-react"
import { UserLanguage } from "../UserLanguage";



interface ProfileConfigProps{
  modalOpenAndClose: boolean;
  onRequestClose: () => void;
}

export function ProfileConfig({modalOpenAndClose, onRequestClose}:ProfileConfigProps){

const {isLanguageClicked, OpenAndCloseLanguageModal, CloseLanguageModal} = useContext(ModalsContext);

function handleOpenAndCloseLanguageModal(){
  OpenAndCloseLanguageModal()
}


  return(
    <>
    <Modal isOpen={modalOpenAndClose}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content">
    <Container>
      <Content>
        <button 
        type="button"
        className="language"
        onClick ={handleOpenAndCloseLanguageModal}
        >
          <GlobeSimple size={32} weight="regular" />
          <span>Language</span>
          <CaretRight size={18} weight="regular" />
        </button>
        <button 
        type="button"
        className="dark-mode"
        >
          <Moon size={32} weight="regular" />
          <span>Dark mode</span>
          <div className="mode">
            <Check size={15} weight="thin" />
            <div className="circle"></div>
          </div>
        </button>
          <button 
          type="button"
          className="logged"
           >
            <SignIn size={32} weight="regular" />
            <span>Log in</span>
          </button>
          </Content>
    </Container>
    </Modal>
    <UserLanguage modalLanguageOpenAndClose = {isLanguageClicked}
   onRequestClose = {handleOpenAndCloseLanguageModal}
    />
    </>
  )
}