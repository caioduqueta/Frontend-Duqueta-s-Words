import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 0.5rem;

span.game{
  color: var(--white);
  font-family: "Readex Pro" ,sans-serif;
  font-size: 1.5rem;
  margin-right: 1rem;
}

div{
  height: 6.25rem;
  width: 100%;
  max-width: 62.5rem;
  background: var(--box-inside);
  border: 2px solid var( --box-border-blocked-button);
  border-radius: 5px;

  display: grid;
  grid-template-areas:
"Word" "Winner" "Data";
grid-template-columns: 27rem 27rem 1fr;

  span{
    margin-top: 2rem;
    color: var(--white);
    font-family: "Roboto" ,sans-serif;
    font-size: 1.5rem;

    &.winner{
      margin-left: 1rem;
    }
  }
}


`
