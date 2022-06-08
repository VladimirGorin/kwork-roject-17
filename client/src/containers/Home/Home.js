import React from "react";
import s from '../../containers/Home/Home.module.scss'
import Menu from "../../containers/Menu/Menu";



export default props => {
  return (
    <>
      <div className={s.home_wrap}>
        <div className={s.menu_wrap}>
          <Menu/>
        </div>
      </div>
    </>
  )
}