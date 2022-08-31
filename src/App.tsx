import { GlobalStyle } from "./styles/global";
import { Router } from "./router"
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal"
import { ModalsProvider } from "./Context/ModalContext";

Modal.setAppElement('#root');

export function App() {
  
  return (
    <BrowserRouter>
    <ModalsProvider>
    <Router/>
   </ModalsProvider>
    <GlobalStyle/>
    </BrowserRouter>
  )
}

