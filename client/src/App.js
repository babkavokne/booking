import Main from './pages/Main/Main';
import Calc from './pages/Calculator/Calculator';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth/Auth';

function App() {
  let isAuth = false
  return (
    <BrowserRouter>
      {isAuth ?
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/calc' element={<Calc />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
