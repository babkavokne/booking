import React from 'react';
import { useState } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import Navbar from '../../components/Navbar/Navbar';
import $api from '../../http';
import MyInput from '../Auth/components/MyInput/MyInput';
import { useDispatch } from 'react-redux';
import { nameChange } from '../../store/store'
import cl from './EditProfile.module.sass'

const EditProfile = () => {
  const dispatch = useDispatch()
  const fullName = localStorage.getItem('username').split(' ')
  const [img, setImg] = useState(null)
  const [user, setUser] = useState({
    id: localStorage.getItem('id')
  })

  const userInfo = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const userFile = async (e) => {
    setImg(e.target.files[0])
    const data = new FormData()
    console.log(img);
    data.append('avatar', img)
    const res = await $api.post('/upload', data);
    console.log('res', res);
  }

  const formSubmit = async () => {
    const res = await $api.patch('/update', user)
    console.log('res', res.data.user);
    if (res.status === 200) {
      localStorage.setItem('username', res.data.user.name)
      dispatch(nameChange(res.data.user.name))
    }
  }

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.editProfile}>
            <form >
              <h1>Редактирование профиля</h1>
              <MyInput onChange={(e) => userInfo(e)} type="text" name='sureName' placeholder={`${fullName[0]}`} />
              <MyInput onChange={(e) => userInfo(e)} type="text" name='firstName' placeholder={`${fullName[1]}`} />
              <MyInput onChange={(e) => userInfo(e)} type="text" name='secondName' placeholder={`${fullName[2]}`} />
              <MyInput onChange={(e) => userInfo(e)} type="email" name='email' placeholder="Новый email" />
              <MyInput onChange={(e) => userInfo(e)} type="password" name='password' placeholder="Новый пароль" />
              <MyInput type="password" name='confirm-password' id='confirm-password' placeholder="Повторите пароль" />
              <MyInput onChange={e => userFile(e)} type="file" name='avatar' id='avataravatar' />
              <MyButton onClick={() => formSubmit()}>Сохранить изменения</MyButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
