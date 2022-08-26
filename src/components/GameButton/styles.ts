
import styled from "styled-components";


export const Container = styled.div`  
`

interface ButtonProps{
color: "Start"|'Stop'|"Reset"|"Continue"
}

const ButtonVariant = { //Objeto
  Start: '#10AE5F',
  Stop: '#FF0000',
  Reset: '#FFBA00',
  Continue: '#FF6C00'
}


export const Button = styled.button<ButtonProps>`

width: 9.375rem;
height: 5rem;

background: transparent;
border: 2px solid ${(props) => props.color ? ButtonVariant[props.color]: ""}; 
color: ${(props) => props.color ? ButtonVariant[props.color]: ""};
border-radius: 10px;


font-family: "Roboto" , sans-serif;
font-size: 2rem;
margin-right: 1.5rem;

transition: all 0.2s;
cursor: pointer;

:hover{
  background: ${(props) => props.color ? ButtonVariant[props.color]: ""};
  color: var(--white);
}
`