import styled from "styled-components";

export const Container = styled.header`
height: 4.6875rem;
width: 100%;

background: var(--header);
box-shadow: 0 8px 8px var(--sidebar-hover);

display: flex;
justify-content: space-between;
align-items: center;


img{
  width: 3.75rem;
  height: 4rem;
  margin-left: 3rem;
  margin-bottom:0.25rem;
}
 strong{
  margin-left: 5.5rem;

  color: var(--white);

  font-family:'Readex Pro', sans-serif;
  font-weight: 400;
  font-size: 2rem

 }
 div{
  margin-right: 3rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
 }
 button.log-in{
  border: 2px solid var(--yellow);
  background: transparent;
  color: var(--yellow);

  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s;

  &:hover{
    color: var(--white);
    background: var(--yellow);
  }
 }
 button.profile{
  background: transparent;
  color:  var(--white);
  border: none;
  cursor: pointer;

  transition: all 0.2s;


  &:hover{
    color: var(--yellow);
  }
 }


 @media (max-width:1080px){
  strong{display: none;}
}

@media (max-width:720px){
  strong{display: none;}
}
`