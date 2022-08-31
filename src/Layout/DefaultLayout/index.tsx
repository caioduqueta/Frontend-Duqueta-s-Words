import { PageContainer } from "./styles"
import { Header } from "../../components/Header"
import {Sidebar} from "../../components/Sidebar"
import { Outlet } from "react-router-dom" 
import { ModalsContext } from "../../Context/ModalContext";
import { useContext } from "react";



export function DefaultLayout(){

  const {CloseProfileModal} = useContext(ModalsContext);

  function handleCloseProfileModal(){
    CloseProfileModal()
    }

  return(
    <>
      <Header/>
      <PageContainer 
      onClick={handleCloseProfileModal}>
        <div className="Sidebar">
          <Sidebar/> 
        </div>
        <div className="Outlet">
          <Outlet/>
        </div>
      </PageContainer>
  </>
  )
}