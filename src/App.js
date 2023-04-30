
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Homepage from './Pages/Homepage/Homepage';

import Quizpage from './Pages/Quizpage/Quizpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage/>}></Route>
          <Route exact path='/quizpage' element={<Quizpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
