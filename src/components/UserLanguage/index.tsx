import {Container, Content} from "./styles"
import Modal from "react-modal"


interface UserLanguageProps{
  modalLanguageOpenAndClose: boolean;
  onRequestClose: () => void;
}

export function UserLanguage({modalLanguageOpenAndClose, onRequestClose}:UserLanguageProps){
  return(
    <Modal isOpen={modalLanguageOpenAndClose}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content">
    <Container onClick={onRequestClose}>
      <span className="user-language">Languages</span>
      <Content>
        <button 
        type="button"
        className="english"
        >
          <span>English</span>
        </button>
        <button 
        type="button"
        className="português"
        >
          <span>Português-Brasil</span>
        </button>
          <button 
          type="button"
          className="español"
           >
            <span>Español</span>
          </button>
          </Content>
    </Container>
    </Modal>
  )
}