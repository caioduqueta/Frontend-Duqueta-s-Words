import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Titles = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 0.5rem;

div{
  height: 6.25rem;
  width: 100%;
  max-width: 62.5rem;

  display: grid;
  grid-template-areas:
"Word" "Winner" "Data";
grid-template-columns: 27rem 27rem 1fr;}

  span{
    margin-left: 9rem;
    margin-top: 5rem;
    color: var(--text-grey);
    font-family: "Roboto" ,sans-serif;
    font-size: 1rem;
  }

`

export const Boxes = styled.div`
width: 100%
`