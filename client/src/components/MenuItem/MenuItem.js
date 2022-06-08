import React from "react";
import s from './MenuItem.module.scss'
import {Link} from "react-router-dom";
import {configUrl} from "../../Helpers/configUrl";

export default props => {

  return (
    <li>
      <Link to={props.href}>{props.name}</Link>
      <img src={`${configUrl.imgUrl}${props.img_src}`} alt=""/>
    </li>
  )
}