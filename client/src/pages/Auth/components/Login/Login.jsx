import React, { useState } from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../../../store/store'
import $api from '../../../../http/index'
import cl from './Login.module.sass'


const Login = (props) => {
  let auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [info, setInfo] = useState({ email: '', password: '' })
  const changeInfo = (e) => {
    setInfo({ ...info, [e.currentTarget.name]: e.currentTarget.value })
  }

  const enter = async () => {
    const res = await $api.post('/login', { email: info.email, password: info.password })

    if (res) {
      dispatch(login(res.data.name));
      localStorage.setItem('username', res.data.name);
      localStorage.setItem('isAuth', true)
      console.log(res.data);
      localStorage.setItem('token', res.data.access)
    }
  }



  return (
    <form className={cl.login}>
      <MyInput onChange={(e) => changeInfo(e)} name='email' type="email" placeholder="Email" />
      <MyInput onChange={(e) => changeInfo(e)} name='password' type="password" placeholder="Пароль" />
      <MyButton onClick={() => enter()}>Войти</MyButton>
    </form>
  );
}

export default Login;
