import { Container, Hamburguer } from "./styles"
import { NavLink } from "react-router-dom"
import { useState } from "react"

import { List } from "phosphor-react"

// interface SidebarProps{
//  onOpenAndCloseSidebar: ()=> void
// }
//onOpenAndCloseSidebar}: SidebarProps

export function Sidebar(){
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)

function handleOpenAndCloseSidebar(){
setIsHamburgerClicked(!isHamburgerClicked);
 console.log(isHamburgerClicked);
}
  return( 
  <>
    <Hamburguer 
    type="button"
    onClick={handleOpenAndCloseSidebar}
    >
      <div className="list">
      <List size={32} weight="regular" />
      </div>
      </Hamburguer>

    {isHamburgerClicked && <Container> 
    <NavLink to="/wordcounter">
      Word counter
    </NavLink>
    <NavLink to="/whichwordisit">
    Which Word is it?
    </NavLink>
    <NavLink to="/yourwords">
    Your Words
    </NavLink>
    </Container>}
    </>
  
  )
}