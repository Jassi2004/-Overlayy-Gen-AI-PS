
import MainContent from './MainContent';
import './App.css'
import './index.css'
import './index.css'
// import TryOutPage from './TryOutPage';
import TryOutPage from './TryOutPage';
import {Routes, Route} from 'react-router-dom'
import Result from './Result';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<MainContent/> }></Route>
      <Route path= '/test' element={<TryOutPage/>}></Route>
      <Route path='/result' element={<Result/>}></Route>
    </Routes>
     
     
    </>
  )
}

export default App
