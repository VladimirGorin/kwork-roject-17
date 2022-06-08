import React from "react";
import s from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = (props) => {
  const links = [
    {
      link: '',
      title: 'Корпоративным клиентам'
    },
    {
      link: '',
      title: 'Про нас'
    },
    {
      link: '',
      title: 'Способы доставки'
    },
    {
      link: '',
      title: 'Гарантия'
    },
    {
      link: '',
      title: 'Возврат и обмен'
    },
    {
      link: '',
      title: 'Распродажа'
    },
    {
      link: '',
      title: 'Контакты'
    }
  ]

  return (

    <div className={s.Header}>
      <div className={s.top_header}>
        <div className={s.top_header_inner}>
        <p  className={s.city}>Киев</p>
        <p  className={s.work_time}>Время работы</p>
        <ul className={s.links}>
          {links.map((el) => {return <li key={el.title}><a href={el.link}>{el.title}</a> </li>})}
        </ul>
        </div>
      </div>

      <div className={s.header_bottom}>
        <div className={s.header_bottom_inner}>
        <div className={s.logo}>
          comtrading
        </div>
        <div className={s.phone}>
          +38 (044) 501 73 73
        </div>
        <div className={s.search}>
          <input type="text" placeholder={'Например, мобильный телефон'}/>
          <button></button>
        </div>
        <div className={s.account}>
          <ul>
            <li className={s.account_acc}>
              <Link to="/"/>
            </li>
            <li className={s.account_wish}>
              <Link to="/"/>
            </li>
            <li className={s.account_cart}>
              <Link to="/"/>
            </li>
          </ul>
        </div>
        </div>
      </div>



    </div>




  )
}


export default Header