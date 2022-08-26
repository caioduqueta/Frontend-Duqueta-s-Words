import { useState } from "react"
import {Container, Content} from "./styles"
import { CaretRight, GlobeSimple, Moon, Check, SignIn, SignOut } from "phosphor-react"

export function ProfileConfig(){
const [isLanguageClicked, setIsLanguageClicked] = useState(false)

function handleCloseLanguage(){}

  return(
    <Container>
      <Content>
        <button 
        type="button"
        className="language"
        onClick={(props) => setIsLanguageClicked(!isLanguageClicked)}
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
  )
}