// import React, { useContext, useState } from 'react';
// import { productsContext } from '../../../Contexts/ProductsContext';
// import history from "../../../helpers/history";
// import './Category.css';
// import cx from "classnames";
// import { CSSTransition } from 'react-transition-group';

// const menuItems = [
//     { title: "Спортивный стиль"},
//     { title: "Jordan" },
//     { title: "Бег" },
//     { title: "Футбол" },
//     { title: "Бейсбол"},
//     { title: "Все"}
//   ];

// const Category = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const { getProducts } = useContext(productsContext)
//     const [category, setCategory] = useState(getCatgeory())
  
//     function getCatgeory() {
//       let search = new URLSearchParams(history.location.search)
//       return search.get('category')
//     }
  
//     console.log(category)
//     function handleChangeCategory(value) {
//         if(value === 'Все') {
//             history.push(`${history.location.pathname.replace('category')}`)
//             getProducts()
//             return
//         }
//       let search = new URLSearchParams(history.location.search)
//       search.set('category', value)
//       history.push(`${history.location.pathname}?${search.toString()}`)
//       getProducts(search.toString())
//       setCategory(value)
//     }
//     return (
//         // <form className={cx("category", { "scategory-closed": !isOpen })}>
//         //     <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>Ok</button>
//         //     <div className="container-category">
//         //     {menuItems.map(item => (
//         //         <CSSTransition
//         //         in={isOpen}
//         //         timeout={200}
//         //         classNames={"fade"}
//         //         unmountOnExit
//         //         >
//         //         <label>{item.title}<input name="category" type="radio" value={item} onClick={() => handleChangeCategory(item)}/>
//         //        </label> 
//         //       </CSSTransition>
//         //     ))
//         //     }
//         //     <label>All
//         //         <input type="radio" name="category" value="all" onClick={(e) => handleChangeCategory(e.target.value)} />
//         //     </label>
//         //     </div>
//         // </form>

//     <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
//       <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
//       OK   asd
//    </button>
//       <ul>
//         {menuItems.map((item) => (
//           <li key={item.title} onClick={() => handleChangeCategory(item.title)}>
//             <div className={"sidebar__listItem"}>
//               <CSSTransition
//                 in={isOpen}
//                 timeout={200}
//                 classNames={"fade"}
//                 unmountOnExit
//               >
//                 <span>{item.title}</span>
//               </CSSTransition>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>

//     );
// };

// export default Category;