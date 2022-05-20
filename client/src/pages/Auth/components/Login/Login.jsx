import React, { useState } from 'react';
import axios from 'axios';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../../store/store'
import cl from './Login.module.sass'


const Login = (props) => {
  let auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [info, setInfo] = useState({ email: '', password: '' })
  const changeInfo = (e) => {
    setInfo({ ...info, [e.currentTarget.name]: e.currentTarget.value })
  }

  const test = async () => {
    const res = await axios.post('http://localhost:5000/login', { email: info.email, password: info.password })
    console.log(res.data.name);

    if (res) {
      dispatch(login(res.data.name));
      console.log(auth.isAuth, auth.fullName);
      localStorage.setItem('username', res.data.name);
      localStorage.setItem('isAuth', true)
    }
  }



  return (
    <form className={cl.login}>
      <MyInput onChange={(e) => changeInfo(e)} name='email' type="email" placeholder="Email" />
      <MyInput onChange={(e) => changeInfo(e)} name='password' type="password" placeholder="Пароль" />
      <MyButton onClick={() => test()}>Войти</MyButton>
    </form>
  );
}

export default Login;
