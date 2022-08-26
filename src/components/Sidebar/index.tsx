import { Container, Hamburguer } from "./styles"
import { NavLink } from "react-router-dom"

import { List } from "phosphor-react"

export function Sidebar(){
  return( 
  <>
    <Hamburguer>
      <div className="list">
      <List size={32} weight="regular" />
      </div>
      </Hamburguer>

    <Container> 
    <NavLink to="/admin/wordcounter">
      Word counter
    </NavLink>
    <NavLink to="/admin/whichwordisit">
    Which Word is it?
    </NavLink>
    <NavLink to="/admin/yourwords">
    Your Words
    </NavLink>
    </Container>
    </>

  )
}