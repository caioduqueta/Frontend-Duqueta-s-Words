import styled from "styled-components";

export const Container = styled.div`
height: calc(100vh - 75px);
padding-top: 8rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
color: var(--white);

span{
  font-family:"Readex Pro",sans-serif;
  font-size: 2rem;
}
`
export const Times = styled.div`
display:flex;
justify-content: center;
align-items: flex-end;
font-family:"Readex Pro",sans-serif;

h1{
  font-size: 11rem;
  padding-left: 7rem;
  transition: all 0.2s;
}
& h1:hover{
  color: var(--yellow);
}

span{
  font-size: 2rem;
  margin-bottom: 2.2rem;
  padding-left: 1rem;
}
`

export const BoxButtons = styled.div`
display:flex;
justify-content: center;
align-items: center;

`
export const Boxes = styled.div`
display:flex;
justify-content: center;
align-items: center;


`