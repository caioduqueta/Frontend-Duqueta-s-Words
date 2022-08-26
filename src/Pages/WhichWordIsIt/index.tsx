import { Container, Word, BoxButtons, Boxes } from "./styles"
import { GameButton } from "../../components/GameButton"
import { MainBox } from "../../components/MainBox"
import { ResultBox } from "../../components/ResultBox"

export function WhichWordIsIt(){
  return(
    <Container>
      <span>The chosen word is...</span>
      <Word>
        <h1>Schweinsteiger</h1>
      </Word>
    <BoxButtons>
      <GameButton 
      title="Start" //START OU CONTINUE
      />
      <GameButton title="Stop"/>
     </BoxButtons>
     <Boxes>
      <MainBox/>
      <ResultBox/>
      </Boxes>
    </Container>
  )
}