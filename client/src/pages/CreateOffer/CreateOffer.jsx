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
  const [status, setStatus] = useState(false);
  const [img, setImg] = useState([])
  const changeOffer = (e) => {
    ['rooms', 'guests', 'lowestPrice', 'phone'].includes(e.target.name) ? (
      setOffer({ ...offer, [e.target.name]: Number(e.target.value) })
    ) : (
      setOffer({ ...offer, [e.target.name]: e.target.value })
    )
  }

  const createOffer = async () => {
    console.log(img)
    console.log('length', img.length)
    const data = new FormData();
    for (let i = 0; i < img.length; i++) {
      data.append('images', img[i]);
    }
    data.append('offer', JSON.stringify(offer))
    const res = await $api.post('/createOffer', data) || 1
    if (res.status === 200) setStatus(true)
  }

  const previewPhoto = (e) => {
    console.log('e.target.files', e.target.files);
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
    setOffer({ ...offer, offerType: 'Жильё' })
  }, [])

  console.log('offer', offer);

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className={cl.createOffer}>
          <h1>Создать предложение</h1>
          <label htmlFor="types">Тип предложения?</label>
          <select name="offerType" id="types" defaultValue={"Жильё"} onChange={(e) => changeOffer(e)}>
            <option value="Жильё">Жильё</option>
            <option value="Активный отдых">Активный отдых</option>
            <option value="Рестораны">Рестораны</option>
            <option value="Мероприятия">Мероприятия</option>
          </select>
          {offer.offerType == 'Жильё' ?
            <>
              <label htmlFor="allocationType">Тип предложения?</label>
              <select name="allocationType" id="types" defaultValue={"Отели"} onChange={(e) => changeOffer(e)}>
                <option value="Отели">Отели</option>
                <option value="Апартаменты">Апартаменты</option>
                <option value="Резорт">Резорт</option>
                <option value="Вилла">Вилла</option>
              </select>
            </>
            :
            null
          }
          <MyInput type='text' placeholder='Название' name='offerName' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' placeholder='Страна' name='country' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' placeholder='Город' name='city' onChange={(e) => changeOffer(e)} />
          <MyInput type='text' placeholder='Адрес' name='adress' onChange={(e) => changeOffer(e)} />
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
          {status ?
            <h1>Предложение успешно создано!</h1> : null
          }
          <MyButton onClick={() => { createOffer(); console.log('offer', offer) }}>Создать предложение</MyButton>
        </div>
      </div>
    </>
  );
}

export default CreateOffer;
