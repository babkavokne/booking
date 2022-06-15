import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Navtop from '../../components/Navtop/Navtop'
import hh from '../../static/icons/hh.jpg'
import github from '../../static/icons/github.png'
import tg from '../../static/icons/tg.png'
import cl from './AboutDeveloper.module.sass'

export default function AboutDeveloper() {
  return (
    <>
      <Navtop />
      <Navbar />
      <div className="wrapper">
        <div className="container">
          <div className={cl.home}>
            <h1 className={cl.welcome}>Привет! Добро пожаловать!</h1>

            <p>
              Меня зовут <span className={cl.red}>Дмитрий Хромихин</span> , мне 22 года, я - фронтенд разработчик, в конце лета или начале осени перееду в Москву на пмж
            </p>

            <p><span className={cl.red}>Вы</span> попали на страницу "о разработчике" моего пэт-проекта: этот сайт - демо того, что я умею, где натыкано (и продолжает натыкиваться) много разного. Чувстуйте себя как дома! Поисследуйте то, что я создал :)</p>

            <p>Фронт проекта пишется на <span className={cl.react}>React</span> + <span className={cl.redux}>Redux Toolkit</span>, <span className={cl.axios}>axios</span> для запросов на сервер, применяется jwt, bcrypt, стилизация на <span className={cl.sass}>sass</span>, макет взял с какого-то тг канала, там была всего одна страница (Main(Overview)), остальные допиливал сам, так что дизайн местами может быть не идеальным. Планирую частично переписать всё на <span className={cl.typescript}>Typescript</span></p>

            <p>Серверная часть <span className={cl.node}>NodeJS</span> + <span className={cl.express}>Express.js</span> + <span className={cl.mongo}>mongodb</span> + <span className={cl.mongoose}>mongoose</span>. Фотографии на сервер гружу при помощи <span className={cl.multer}>multer</span>. тут особо рассказывать нечего.</p>


            <p>
              Больше информации обо мне вы можете найти: 
              <div><img src={hh} alt="" /> резюме на hh.ru - <a href="https://hh.ru/resume/f664ebaeff076528a40039ed1f36524c623969" target="_blank">жмяк</a> </div>
              <div><img src={github} alt="" /> гитхаб - <a href="https://github.com/babkavokne" target="_blank">жмяк</a> </div>
              <div><img src={tg} alt="" /> тг для связи - <a href="https://t.me/froggush" target="_blank">жмяк</a></div>
            </p>
            {/* я помню про ul, тут просто сделал так */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
