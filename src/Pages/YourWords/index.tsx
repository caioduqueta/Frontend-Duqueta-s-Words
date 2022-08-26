import { PreviousWords } from "../../components/PreviousWords"
import { Container, Boxes, Titles } from "./styles"

export function YourWords(){
  return(
    <Container>
      <Titles>
      <div>
        <span>Word</span>
        <span>Winner</span>
        <span>Date</span>
      </div>
      </Titles>
      <Boxes>
      <PreviousWords/>
      <PreviousWords/>
      <PreviousWords/> 
      </Boxes>
    </Container>
  )
}