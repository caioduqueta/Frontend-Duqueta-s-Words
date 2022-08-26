import styled from "styled-components";

export const Container = styled.div`

margin-top: 7rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: var(--white);

span{
  font-family:"Readex Pro",sans-serif;
  font-size: 2rem;
}
`
export const Word = styled.div`
display:flex;
justify-content: center;
align-items: flex-end;
font-family:"Readex Pro",sans-serif;

h1{
  font-size: 8rem;

  transition: all 0.2s;
}
& h1:hover{
  color: var(--yellow);
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
align-items: center;`