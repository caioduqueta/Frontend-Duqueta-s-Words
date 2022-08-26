
import {UserCircle} from "phosphor-react"
import logoImg from '../../assets/logo-duqueta.svg'

import { ProfileConfig } from "../ProfileConfig";
import { UserLanguage } from "../UserLanguage";
import { NavLink } from "react-router-dom";

import {Container} from "./styles"
import { useState } from "react";

export function Header(){

  
const [isProfileClicked, setisProfileClicked] = useState(false)

function handleOnClickProfile(){
setisProfileClicked(!isProfileClicked)
}


  return(
    <>
    <Container>
      <NavLink to="/" title="Home">
        <img src={logoImg} alt="Logo Duqueta"></img>
      </NavLink>
      <strong>Duqueta's words for Twitch</strong>
      <div>
      <button 
      type="button"
      className="log-in">
        Log in
      </button>
      <button
       type="button"
       className="profile"
        onClick={handleOnClickProfile}
        >
      <UserCircle size={45} weight="thin" />
      </button>
      </div>
    </Container>
    {isProfileClicked && <ProfileConfig/>} {/*se estiver true abre*/}
    </>

  )
}