import React, {useState} from "react";
import s from './Menu.module.scss'
import {connect} from 'react-redux'
import {getMenu} from "../../store/actions/common";
import {useEffect} from "react";
import MenuItem from "../../components/MenuItem/MenuItem";

const Menu = (props) => {
  const ulHeight = `489px`
  const [ulStyle, setUlStyle] = useState({
    maxHeight: ulHeight
  })
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    props.getMenu()
  }, []);

  const openMenu = () => {
    setUlStyle({maxHeight: `initial`});
    setToggleMenu(true)
  }

  const closeMenu = () => {
    setUlStyle({maxHeight: ulHeight})
    setToggleMenu(false)
  }

  const renderMenuItems = () => {
    return props.menu.map((el) => {
      return <MenuItem
              name={el.name}
              img_src={el.image}
              href={el.path}
              key={el._id}
      />
    })
  }

  if(props.menu.length) {
    return (
      <>
        <ul style={ulStyle}>
          <li>Каталог товаров</li>
          {renderMenuItems()}
        </ul>
        <div className={s.show_more} onClick={toggleMenu ? closeMenu : openMenu}>{toggleMenu ? 'Скрыть' : 'Показать еще' }</div>

      </>
    )
  } else {
    return (
      <>
        loading...
      </>
    )
  }


}

function mapStateToProps(state) {
  return {
    menu: state.common.menu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMenu: (items) => {dispatch(getMenu(items))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)