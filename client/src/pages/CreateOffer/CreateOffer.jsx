import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyButton from '../../components/MyButton/MyButton';
import MyFileLoader from '../../components/MyFileLoader/MyFileLoader';
import Navbar from '../../components/Navbar/Navbar';
import $api from '../../http';
import MyInput from '../Auth/components/MyInput/MyInput';
import cl from './CreateOffer.module.sass'

const CreateOffer = () => {
  const [offer, setOffer] = useState({
    creator: localStorage.getItem('id')
  })
  const [img, setImg] = useState([])
  const changeOffer = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value })
    console.log('select', e.target.value);
  }

  const createOffer = async () => {
    console.log(img)
    const data = new FormData();
    data.append('images', img);
    // data.append('offer', offer);
    const res = await $api.post('/createOffer', data)
    console.log('res', res);
  }

  const previewPhoto = (e) => {

    setImg([...img, ...e.target.files])

    for (let i = 0; i < e.target.files.length; i++) {
      let reader = new FileReader();

      reader.readAsDataURL(e.target.files[i]);

      reader.onload = () => {
        let newImg = document.createElement('img');
        newImg.onclick = () => {
          const modal = document.querySelector(`.${cl.modal}`)
          modal.style.display = 'flex'
          modal.onclick = () => modal.style.display = 'none'
          document.querySelector(`#${cl.prev}`).src = `${newImg.src}`
        }
        newImg.src = reader.result;
        document.querySelector(`.${cl.preview}`).appendChild(newImg)
      }
    }
    e.target.value = ''
  }

  useEffect(() => {
    setOffer({ ...offer, offerType: 'Отели' })
  }, [])

  console.log('offer', offer);

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
          <MyInput type='text' placeholder='Название' name='offerName' onChange={(e) => changeOffer(e)} />
          <div className={cl.quantity}>
            <MyInput className={cl.amount} type='text' name='rooms' placeholder='Кол-во комнат' onChange={(e) => changeOffer(e)} />
            <MyInput className={cl.amount} type='text' name='guests' placeholder='Кол-во гостей' onChange={(e) => changeOffer(e)} />
          </div>
          <MyInput type='text' name='lowestPrice' placeholder='Минимальная цена' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='phone' placeholder='Телефон' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='description' placeholder='Описание' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' name='highlights' placeholder='Включенные услуги через запятую' onChange={(e) => changeOffer(e)} />
          <label htmlFor='file'>Добавьте фото</label>
          <MyFileLoader name='file' className={cl.file} multiple onChange={(e) => previewPhoto(e)} img={img.length} />
          <div className={cl.preview}>
            <div className={cl.modal}>
              <img id={cl.prev} src="#" alt="" />
            </div>
          </div>
          <MyButton onClick={() => { createOffer(); console.log('img', img) }}>Создать предложение</MyButton>
        </div>
      </div>
    </>
  );
}

export default CreateOffer;
