import Main from './pages/Main/Main';
import Calc from './pages/Calculator/Calculator';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { auth } from './store/store'

import Auth from './pages/Auth/Auth';

function App() {
  let isAuth = useSelector((state) => state.auth.isAuth)

  return (
    <BrowserRouter>
      {isAuth ?
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/calc' element={<Calc />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
