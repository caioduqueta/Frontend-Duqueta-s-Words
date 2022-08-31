import styled from "styled-components";

export const Container = styled.form`
margin-top: 4rem;
width: 37.5rem;
height: 21.875rem;

background:var(--box-inside);
border: 2px solid var(--box-border-blocked-button);
border-radius: 10px;

`
export const FirstDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem 2rem 1.5rem 2rem;

h3{
  font-family: "Readex Pro", sans-serif;
  font-size: 1.75rem;
}

button{
  font-family: "Roboto", sans-serif;
  font-size: 1.75rem;

  background: transparent;
  padding: 0.3rem 1rem;

  border-radius: 10px;
  border: 1px solid var(--yellow);
  color: var(--yellow);
  cursor: pointer;

  transition: all 0.2s;

  &:hover{
    color: var(--white);
    background: var(--yellow);
  }
}
`
export const InputDiv = styled.div`
display: flex;
justify-content: center;

input{
  width: 100%;
  max-width: 34rem;
  height: 3rem;

  border-radius: 10px;
  padding: 0 1rem 0 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;

  color: var(--text-input);
  border: 2px var(--box-border-blocked-button) solid;
  background-color: var(--background);

  transition: all 0.2s;

  &:hover{
    filter: brightness(1.3);
  }
}
`
export const CheckBoxDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
margin-left: 2.5rem;

div{
  display: flex;
  justify-content: center;
  align-items: center;
padding: 1.5rem 0 0 0;
}

input{
 appearance: none;
 -webkit-appearance: none;
 height: 1.5rem;
 width: 1.5rem;
 background: var(--white);
 margin-right: 0.75rem;
 border-radius: 4px;
 border:2px solid var(--background);
 cursor: pointer;

 transition: all 0.2s;
}

input:hover{
background:var(--text-grey);
}

input:checked{
  background-color: var(--yellow)
}

label{
  font-family: "Roboto" , sans-serif;
  font-size: 1.25rem;
  cursor :pointer;
}

`
