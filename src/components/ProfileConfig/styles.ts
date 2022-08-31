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

`
export const Content = styled.div`
button{
  background: none;
  color: var(--white);
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
}

button.language{
  border: none;
  margin-bottom: 0.75rem; 
  transition: all 0.2s;

}

button.language:hover{
  color: var(--yellow);
}

button.dark-mode{
  border: none;
  margin-bottom: 0.75rem; 

  div.mode{
    display: flex;
    justify-content: center;
    height: 1.5rem;
    width: 3rem;
    border: 2px solid var(--white);
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    div.circle{
    height: 0.875rem;
    width: 0.875rem;
    border-radius: 50%;
    background: var(--white);
    margin-left: 0.25rem;

  /*ALTERAR O CLICK*/
  }
}
} 


button.logged{
border: none;
transition: all 0.2s;

&:hover{
  color: var(--yellow);
}
}

span{
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;

}
`
// export const ButtonModal = styled.div`
//  display:none;
//  `