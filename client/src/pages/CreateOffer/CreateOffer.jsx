import React from 'react';
import MyButton from '../../components/MyButton/MyButton';
import Navbar from '../../components/Navbar/Navbar';
import MyInput from '../Auth/components/MyInput/MyInput';
import cl from './CreateOffer.module.sass'

const CreateOffer = () => {
  const createOffer = () => {
    console.log('111');
  }


  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className={cl.createOffer}>
          <h1>Создать предложение</h1>
          <label htmlFor="types">Тип предложения?</label>
          <select name="types" id="types">
            <option value="HOTELS">Отели</option>
            <option value="ACTIVITIES">Активный отдых</option>
            <option value="RESTAURANTS">Рестораны</option>
            <option value="EVENTS">Мероприятия</option>
          </select>
          <MyInput type='text' placeholder='Название' />
          <div className={cl.quantity}>
            <MyInput className={cl.amount} type='text' placeholder='Кол-во комнат' />
            <MyInput className={cl.amount} type='text' placeholder='Кол-во гостей' />
          </div>
          <MyInput type='text' placeholder='Минимальная цена' />
          <MyInput type='text' placeholder='Телефон' />
          <MyInput type='text' placeholder='Описание' />
          <MyInput type='text' placeholder='Включенные услуги через запятую' />
          <label htmlFor='file'>Добавьте фото</label>
          <input className={cl.file} type='file' name='file' multiple />
          <div className={cl.preview}></div>
          <MyButton onClick={() => createOffer()}>Создать предложение</MyButton>
        </div>
      </div>
    </>
  );
}

export default CreateOffer;
