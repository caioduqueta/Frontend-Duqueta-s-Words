import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { WordCounter } from './Pages/WordCounter'
import { WhichWordIsIt } from './Pages/WhichWordIsIt'
import { YourWords } from './Pages/YourWords'
import { DefaultLayout } from './Layout/DefaultLayout'



export function Router(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/" element={<DefaultLayout/>}>
          <Route path="/wordcounter" element={<WordCounter/>}/>
          <Route path="/whichwordisit" element={<WhichWordIsIt/>}/>
          <Route path="/yourwords" element={<YourWords/>}/>
      </Route>
  </Routes>
  )
}