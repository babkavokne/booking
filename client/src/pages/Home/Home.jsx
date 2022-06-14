import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Navbar from '../../components/Navbar/Navbar'
import Navtop from '../../components/Navtop/Navtop'
import cl from './Home.module.sass'

export default function Home() {
  return (
    <>
      <Navtop />
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.home}>
            <h1 className={cl.welcome}>Привет! Добро пожаловать!</h1>

            <p>
              Меня зовут <span>Дмитрий Хромихин</span> , мне 22 года, я - фронтенд разработчик
            </p>

            <p><span>Вы</span> попали на страницу "о разработчике" моего пэт-проекта: по сути этот сайт - демонстративная песочница того, что я умею, где натыкано (и продолжает натыкиваться) много разного: регистрация пользователя, возможность редактировать основные данные, создание предложения о сдаче в аренду номеров, квартир, объявлений о мероприятиях и информация о ресторанах; вывод всех этих объявлений и предложений, динамическая подгрузка, сортировка, какие-то миниприложения, комментарии, чат, сторонние виджеты, рейтинги предложений и объявлений, слайдеры, рассылка писем (nodemailer)</p>

            <p>Фронт проекта пишется на <span className={cl.react}>React</span> + <span className={cl.redux}>Redux Toolkit</span>, <span className={cl.axios}>axios</span> для запросов на сервер, применяется jwt, bcrypt, стилизация на <span className={cl.sass}>sass</span>, макет взял с какого-то тг канала, там была всего одна страница (Main(Overview)), остальные допиливал сам, так что дизайн местами может быть не идеальным. Планирую частично переписать всё на <span className={cl.typescript}>Typescript</span></p>

            <p>Серверная часть <span className={cl.node}>NodeJS</span> + Express.js + <span className={cl.mongo}>mongodb</span> + <span className={cl.mongoose}>mongoose</span>. Фотографии на сервер гружу при помощи multer. тут особо рассказывать нечего.</p>

            
            <p>
              Больше информации обо мне вы можете найти: <br/>
              резюме на hh.ru - <a href="https://hh.ru/resume/f664ebaeff076528a40039ed1f36524c623969" target="_blank">жмяк</a> <br/>
              гитхаб - <a href="https://github.com/babkavokne" target="_blank">жмяк</a> <br/>
              тг для связи - <a href="https://t.me/froggush" target="_blank">жмяк</a>
            </p>

          </div>
        </div>
      </div>
    </>
  )
}
