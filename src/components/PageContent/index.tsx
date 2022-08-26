import { Container } from "./styles"
import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar"
import { ChooseYourWord} from "../../Pages/ChooseYourWord"
import { WordCounter } from "../../Pages/WordCounter"

export function PageContent(){
  return(

    <Container>
    <div className="Sidebar">
    <Sidebar/>
    </div>
    <div className="Outlet">
    <WordCounter/>
    </div>
  </Container>
  )
}