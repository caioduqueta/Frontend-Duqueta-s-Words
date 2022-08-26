import { Container, Times, BoxButtons, Boxes } from "./styles"
import { GameButton } from "../../components/GameButton"
import { MainBox } from "../../components/MainBox"
import { ResultBox } from "../../components/ResultBox" 


export function WordCounter(){


  return(
    <Container>
      <span>The word Duqueta was written</span>
      <Times>
        <h1>10776</h1>
        <span>times.</span>
      </Times>
    <BoxButtons>
      <GameButton 
      title="Start" //START OU CONTINUE
      />
      <GameButton title="Stop"/>
      <GameButton title="Reset"/>
     </BoxButtons>
     <Boxes>
      <MainBox/>
      <ResultBox/>
      </Boxes>
    </Container>
 
  )
}