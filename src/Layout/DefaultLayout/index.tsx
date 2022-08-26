import { PageContainer } from "./styles"
import { Header } from "../../components/Header"
import {Sidebar} from "../../components/Sidebar"
import { Outlet } from "react-router-dom" 

export function DefaultLayout(){
  return(
    <>
      <Header/>
      <PageContainer>
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