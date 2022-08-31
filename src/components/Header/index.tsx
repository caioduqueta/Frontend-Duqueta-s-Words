import { useState, useContext } from "react";
import { ModalsContext } from "../../Context/ModalContext";

import {UserCircle} from "phosphor-react"
import logoImg from '../../assets/logo-duqueta.svg'

import { ProfileConfig } from "../ProfileConfig";
import { UserLanguage } from "../UserLanguage";
import { NavLink } from "react-router-dom";

import {Container} from "./styles"


export function Header(){

const {isProfileModalClicked, OpenAndCloseProfileModal, CloseProfileModal} = useContext(ModalsContext);

function handleOpenAndCloseProfileModal(){
OpenAndCloseProfileModal(!isProfileModalClicked)
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
        onClick={handleOpenAndCloseProfileModal}
        >
      <UserCircle size={45} weight="thin" />
      </button>
      </div>
    </Container>
   <ProfileConfig modalOpenAndClose = {isProfileModalClicked}
   onRequestClose = {handleOpenAndCloseProfileModal}
   />
    </>
  )
}