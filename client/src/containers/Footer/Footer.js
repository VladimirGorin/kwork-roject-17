import React from "react";
import s from './Footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {

  return (
    <div className={s.Footer}>
      <div className={s.Footer_inner}>
      <div className={s.col}>
        <p className={s.logo}>comtrading</p>
        <p className={s.copy}>© {new Date().getFullYear()} Все права защищенны</p>
      </div>
      <div className={s.col}>
        <p>Соцсети</p>
      </div>
      <div className={s.col}>
        <p>Время работы</p>
        <ul>
          <li>Пн. - Пт. з 09:00 до 19:00</li>
          <li>Сб. з 10:00 до 14:00</li>
          <li>Вс. - выходной</li>
        </ul>
      </div>
      <div className={s.col}>
        <p>Каталог</p>
        <ul>
          <li><Link to={'/'}>Смартфоны и телефоны</Link></li>
          <li><Link to={'/'}>Телевизоры, аудио и фото</Link></li>
          <li><Link to={'/'}>Бытовая техника</Link></li>
          <li><Link to={'/'}>Смартфоны и телефоны</Link></li>
          <li><Link to={'/'}>Телевизоры, аудио и фото</Link></li>
          <li><Link to={'/'}>Бытовая техника</Link></li>
          <li><Link to={'/'}>Смартфоны и телефоны</Link></li>
          <li><Link to={'/'}>Телевизоры, аудио и фото</Link></li>
          <li><Link to={'/'}>Бытовая техника</Link></li>
        </ul>
      </div>
      <div className={s.col}>
        <p>Навигация </p>
        <ul>
          <li><Link to={'/'}>Корпоративным клиентам</Link></li>
          <li><Link to={'/'}>Про нас</Link></li>
          <li><Link to={'/'}>Способы доставки</Link></li>
          <li><Link to={'/'}>Гарантия</Link></li>
          <li><Link to={'/'}>Возврат и обмен</Link></li>
          <li><Link to={'/'}>Распродажа</Link></li>
          <li><Link to={'/'}>Контакты</Link></li>
        </ul>
      </div>
      <div className={s.col}>
        <p>Контакты</p>
        <ul>
          <li>(098) 501 73 73</li>
          <li>(073) 501 73 73</li>
          <li>(050) 501 73 73</li>
          <li>(044) 501 73 73</li>
          <li>info@comtrading.ua</li>
        </ul>
      </div>
      </div>
    </div>
  )
}


export default Footer