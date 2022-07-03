import Main from './pages/Main/Main';
import Calc from './pages/Calculator/Calculator';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loading } from './store/store'
// import { auth } from './store/store' 
import Auth from './pages/Auth/Auth';
import { useEffect } from 'react';
import $api from './http';
import EditProfile from './pages/EditProfile/EditProfile';
import CreateOffer from './pages/CreateOffer/CreateOffer';
import AboutDeveloper from './pages/AboutDeveloper/AboutDeveloper';
import Home from './pages/Home/Home';

function App() {
  let auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const chekAuth = async () => {
    dispatch(loading(true))
    const response = await $api.get('/refresh')
    localStorage.setItem('token', response.data.access)
    dispatch(loading(false))
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      chekAuth()
    }
  }, [])

  return (
    <BrowserRouter>
      {auth.isAuth ?
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main/:id' element={<Main />} />
          <Route path='/calc' element={<Calc />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/createOffer' element={<CreateOffer />} />
          <Route path='/aboutdeveloper' element={<AboutDeveloper />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
        :
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      }
    </BrowserRouter>
  );
}

export default App;
