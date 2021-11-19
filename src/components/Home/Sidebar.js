import React, { useContext, useState } from 'react';
import { productsContext } from '../../Contexts/ProductsContext';
import history from "../../helpers/history";
import '../Home/Category/Category.css';
import './Sidebar.css'
import cx from "classnames";
import { CSSTransition } from 'react-transition-group';
import Slider from './Slider'

const menuItems = [
    { title: "Спортивный стиль"},
    { title: "Jordan" },
    { title: "Бег" },
    { title: "Футбол" },
    { title: "Бейсбол"},
    { title: "Все"}
  ];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { getProducts } = useContext(productsContext)
  const [category, setCategory] = useState(getCatgeory())

  function getCatgeory() {
    let search = new URLSearchParams(history.location.search)
    return search.get('category')
  }

  console.log(category)
  function handleChangeCategory(value) {
      if(value === 'Все') {
          history.push(`${history.location.pathname.replace('category')}`)
          getProducts()
          return
      }
    let search = new URLSearchParams(history.location.search)
    search.set('category', value)
    history.push(`${history.location.pathname}?${search.toString()}`)
    getProducts(search.toString())
    setCategory(value)
  }
  return (
    <>
    <div className="sidebar__buttons">
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
      фильтры
   </button>
    </div>
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <ul className="sidebar__title">
        <div className="sidebar__slider">
          <Slider />
        </div>
        {menuItems.map((item) => (
          <li key={item.title} onClick={() => handleChangeCategory(item.title)}>
            <div className={"sidebar__listItem"}>
              <CSSTransition
                in={isOpen}
                classNames={"fade"}
                timeout={1000}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

export default Sidebar;