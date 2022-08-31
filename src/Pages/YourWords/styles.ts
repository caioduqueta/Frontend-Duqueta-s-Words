import styled from "styled-components";

export const Container = styled.div`
height: calc(100vh - 75px);
padding-top: 6rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

`
export const Titles = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 0.5rem;

div{
  height: 1rem;
  width: 100%;
  max-width: 62.5rem;

  display: grid;
  grid-template-areas:
"Word" "Winner" "Data";
grid-template-columns: 27rem 27rem 1fr;}

  span{
    margin-left: 9rem;
    color: var(--text-grey);
    font-family: "Roboto" ,sans-serif;
    font-size: 1rem;
  }

`

export const Boxes = styled.div`
width: 100%
`