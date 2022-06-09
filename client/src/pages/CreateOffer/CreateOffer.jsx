import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import MyFileLoader from '../../components/MyFileLoader/MyFileLoader';
import Navbar from '../../components/Navbar/Navbar';
import MyInput from '../Auth/components/MyInput/MyInput';
import cl from './CreateOffer.module.sass'

const CreateOffer = () => {
  const [offer, setOffer] = useState({})
  const [img, setImg] = useState(null)
  const changeOffer = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value })
    console.log('select', e.target.value);
  }
  const createOffer = (e) => {
    console.log('111');
  }

  useEffect(() => {
    setOffer({ ...offer, offerType: 'Отели' })
  }, [])

  console.log('offer', offer);
  console.log('img', img);

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className={cl.createOffer}>
          <h1>Создать предложение</h1>
          <label htmlFor="types">Тип предложения?</label>
          <select name="offerType" id="types" defaultValue={"Отели"} onChange={(e) => changeOffer(e)}>
            <option value="Отели">Отели</option>
            <option value="Активный отдых">Активный отдых</option>
            <option value="Рестораны">Рестораны</option>
            <option value="Мероприятия">Мероприятия</option>
          </select>
          <MyInput type='text' placeholder='Название' name='название' onChange={(e) => changeOffer(e)} />
          <div className={cl.quantity}>
            <MyInput className={cl.amount} type='text' name='Кол-во комнат' placeholder='Кол-во комнат' onChange={(e) => changeOffer(e)} />
            <MyInput className={cl.amount} type='text' name='Кол-во гостей' placeholder='Кол-во гостей' onChange={(e) => changeOffer(e)} />
          </div>
          <MyInput type='text' name='Минимальная цена' placeholder='Минимальная цена' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='Телефон' placeholder='Телефон' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='Описание' placeholder='Описание' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='Включенные услуги через запятую' placeholder='Включенные услуги через запятую' onChange={(e) => changeOffer(e)} />
          <label htmlFor='file'>Добавьте фото</label>
          <MyFileLoader name='file' className={cl.file} multiple onChange={(e) => setImg(e.target.files)} img={img} />
          <div className={cl.preview}></div>
          <MyButton onClick={() => createOffer()}>Создать предложение</MyButton>
        </div>
      </div>
    </>
  );
}

export default CreateOffer;
