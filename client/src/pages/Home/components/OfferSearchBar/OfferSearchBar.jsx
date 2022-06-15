import React from 'react';
import MyButton from '../../../../components/MyButton/MyButton';
import MyInput from '../../../Auth/components/MyInput/MyInput';
import cl from './OfferSearchBar.module.sass'

const OfferSearchBar = (props) => {
  return (
    <div className={`${cl.search} ${props.className}`}>
      <MyInput className={cl.input} name='city' type='text' placeholder='Куда вы хотите поехать?'></MyInput>
      <MyInput className={cl.input} name='guests' type='text' placeholder='Кол-во гостей'></MyInput>
      <MyInput className={cl.input} name='rooms' type='text' placeholder='Кол-во комнат'></MyInput>
      <MyButton className={cl.button}>Проверить цены</MyButton>
    </div>
  );
}

export default OfferSearchBar;
