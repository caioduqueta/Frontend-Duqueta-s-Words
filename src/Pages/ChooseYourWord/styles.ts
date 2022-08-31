import styled from "styled-components";

export const Container = styled.form`
height: calc(100vh - 75px);
padding-top: 8rem;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;


h1{
  color: var(--white);

  font-family:'Readex Pro', sans-serif;
  font-weight: 600;
  font-size: 4rem;
  padding: 2rem;
}

input{
  width: 100%;
  max-width: 35rem;
  height: 3rem;

  border-radius: 22px;
  padding: 0 1rem 0 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;

  color: var(--text-input);
  border: 2px var(--box-border-blocked-button) solid;
  background-color: var(--modal-dark-grey);

  transition: all 0.2s;

  &:hover{
    filter: brightness(1.3);
  }
}

button{
  border: 2px solid var(--yellow);
  background: transparent;
  color: var(--yellow);

  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.2s;

  &:hover{
    color: var(--white);
    background: var(--yellow);
  }
  }


  @media (max-width:720px){
    h1{font-size: 3rem;}
    }
`