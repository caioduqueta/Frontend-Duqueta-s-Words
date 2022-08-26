import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{

  --white: #FFFFFF;
  --red: #FF0000;
  --yellow: #FFBA00;
  --green: #10AE5F;
  --orange: #FF6C00;
  --pink: #D61BB1;

  --twitch: #BC00FF;
  --discord: #5865F2;

  --sidebar-hover: #000000;
  --box-inside: #1F1F21;
  --box-border-blocked-button: #4F4F58;

  --modal-dark-grey:#242427;
  --modal-light-grey: #343437;

  --text-grey: #B0B0B0;
  --text-input: #707070;

  --header: #18181B;
  --background: #0E0E10;

 }
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html{
  @media (max-width:1080px){
    font-size: 93.75%; //15px
    
  }

  @media (max-width:720px){
    font-size: 87.5%; //14px
  }
}

body{
  width: 100%;
  max-width: 100vw;
  
  background: var(--background)
}

`