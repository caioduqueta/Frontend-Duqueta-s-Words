import { createContext, ReactNode, useState } from "react";

 interface ModalsProviderProps{
  children: ReactNode;
 }

 interface ModalsContextProps{
  isProfileModalClicked: boolean;
  OpenAndCloseProfileModal: (arg0: boolean) => void;
  CloseProfileModal: () => void;

  isLanguageClicked: boolean;
  OpenAndCloseLanguageModal: () => void;
  CloseLanguageModal: () => void;

  isInputChange: string;
  changeInput: (value: string) => void;
 }

export const ModalsContext = createContext({} as ModalsContextProps)

export function ModalsProvider({children}:ModalsProviderProps){

const [isProfileModalClicked, setisProfileModalClicked] = useState(false)

function OpenAndCloseProfileModal(value:boolean){
setisProfileModalClicked(value)
}

 function CloseProfileModal(){
 setisProfileModalClicked(false)
}
//------- MODAL PROFILECONFIG-------------
const [isLanguageClicked, setIsLanguageClicked] = useState(false)

function OpenAndCloseLanguageModal(){
  setIsLanguageClicked(!isLanguageClicked)
}

function CloseLanguageModal(){
  setIsLanguageClicked(false)
}
//------- MODAL LANGUAGES-------------

const [isInputChange, setIsInputChange] = useState("")

function changeInput(value:string) {
  setIsInputChange(value)
}

return(
  <ModalsContext.Provider 
      value={{isProfileModalClicked, OpenAndCloseProfileModal, CloseProfileModal ,isLanguageClicked, OpenAndCloseLanguageModal, CloseLanguageModal, isInputChange, changeInput}}>
      {children}
  </ModalsContext.Provider>
)
}