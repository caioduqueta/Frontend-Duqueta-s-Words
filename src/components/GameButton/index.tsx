
import { Container, Button } from "./styles"

interface GameButtonProps{
  title: "Start"|'Stop'|"Reset"|"Continue";
}


export function GameButton({title}:GameButtonProps) {
  return(
    <Container>
      <Button 
        type="button"
       color={title}
        >
          {title}
          
        </Button>
    </Container>
  )
}