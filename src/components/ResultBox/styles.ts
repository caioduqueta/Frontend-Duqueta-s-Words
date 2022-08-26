import styled from "styled-components";

export const Container = styled.div`

margin-top: 4rem;
margin-left: 2rem;
width: 37.5rem;
height: 21.875rem;

background:var(--box-inside);
border: 2px solid var(--box-border-blocked-button);
border-radius: 10px;



`

export const ButtonWinner = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 21.875rem;

button{
  background-color: transparent;
  color: var(--pink);

  font-family: "Readex Pro" , sans-serif;
  font-size: 3.5rem;
  
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 10px;
  border: 2px solid var(--pink);
  transition: all 0.2s;
 
}

button:hover{
  color: var(--white);
  background-color: var(--pink);
}
`

export const Winner = styled.div`
padding: 2rem 2rem 1.5rem 2rem;


display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

p{
  font-family: "Readex Pro", sans-serif;
  font-size: 1.75rem;
  margin-bottom: 1rem;
  margin-right: 17.5rem;
}
div{
  width: 30rem;
  height:15rem;
  background: var(--background);
  border-radius: 10px;
  border: 2px var(--box-border-blocked-button) solid;
}
`