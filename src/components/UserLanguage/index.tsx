import {Container, Content} from "./styles"

export function UserLanguage(){
  return(
    <Container>
      <span className="user-language">Languages</span>
      <Content>
        <button 
        type="button"
        className="english"
        >
          <span>English</span>
        </button>
        <button 
        type="button"
        className="português"
        >
          <span>Português-Brasil</span>
        </button>
          <button 
          type="button"
          className="español"
           >
            <span>Español</span>
          </button>
          </Content>
    </Container>
  )
}