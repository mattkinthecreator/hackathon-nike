import React from 'react';
import Slider from './Slider';
import './Sidebar.css'
import Category from './Category/Category';

const Sidebar = () => {
  return (
   <div className='sidebar'>
       <Slider />
       <Category />
   </div>
  );
};

export default Sidebar;