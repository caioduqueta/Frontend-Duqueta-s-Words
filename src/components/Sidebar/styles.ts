import styled from "styled-components";

export const Hamburguer = styled.div`
width: 3rem;
padding: 0.5rem 0 0.5rem 1rem;

div.list{
color: var(--white);
cursor: pointer;
transition: all 0.2s;
}

& div.list:hover{
  opacity: 70%;
}
`

export const Container = styled.nav`
display: flex;
flex-direction: column;
align-items: flex-start;

width: 25rem;
height: calc(100vh - 8rem);
background: var(--header);
box-shadow: 4px 0 3px var(--sidebar-hover);
font-family:'Readex Pro', sans-serif;
font-weight: 400;
font-size: 1.5rem;
color: var(--white);

a{
  width: 100%;
  max-width: 25rem;
  padding: 0.75rem 0 0.6rem 1rem;
  background: var(--header);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
  transition: all 0.2s;

&:hover{
  background: var(--background);
}
&.active{
  background: var(--yellow);
  color: var(--sidebar-hover)
}
}
`

/*ul{
  width: 25rem;
  list-style: none;
  font-family:'Readex Pro', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  color: var(--white);
li{
  padding: 0.75rem 0 0.6rem 1rem;
  background: var(--header);
  transition: all 0.2s;
  cursor: pointer;
}

& li:hover{
  background: var(--background);
}

div.dev{
  margin-top: 10rem;
}

}

`
*/