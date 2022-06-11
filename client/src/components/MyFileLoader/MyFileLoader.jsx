import React from 'react';
import cl from './MyFileLoader.module.sass'

const MyFileLoader = (props) => {
  return (
    <div className={`${cl.filewrapper} ${props.className}`}>
      {props.img ? <p>Выбрано файлов {props.img}</p> : <p>Выберите файл</p>}
      <input className={cl.file} onChange={props.onChange} type="file" name={props.name} id={props.id} multiple={props.multiple} />
    </div>
  );
}

export default MyFileLoader;
