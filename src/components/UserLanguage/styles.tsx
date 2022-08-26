import styled from "styled-components";

export const Container = styled.div`
position: absolute;
top:4.6875rem;
right: 3rem;
width: 100%;
max-width: 13rem;
height:10rem;

background: var(--header);
box-shadow: 0 8px 8px var(--sidebar-hover);
border-radius: 0 0 7px 7px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;

span.user-language{
  font-size: 1.25rem;
  padding: 0 2rem 0.5rem 2rem;
  color: var(--white);
  font-family: 'Roboto', sans-serif;
  border-bottom: 2px solid var(--box-border-blocked-button);
}

`

export const Content = styled.div`
button{
  background: none;
  color: var(--white);
  border: none;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}
button.english{
  border: none;
  margin-bottom: 0.75rem; 
  transition: all 0.2s;

}

button.english:hover{
  color: var(--yellow);
}

button.português{
  border: none;
  margin-bottom: 0.75rem; 
}
button.português:hover{
  color: var(--yellow);
}

button.español{
  border: none;
  margin-bottom: 0.75rem; 
}
button.español:hover{
  color: var(--yellow);
}

span{
  font-size: 1.25rem;
}
`
  
