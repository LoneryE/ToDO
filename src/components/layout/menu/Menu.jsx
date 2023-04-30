import React from 'react'
import './Menu.scss'
import imgs from '../../../assets/images/img.js'
import Tasks from './tasks/Tasks';
import Lists from './lists/Lists';

const Menu = (data) => {
  return (
    <div className="menu">
      <span className="menu__header">
        <h3 className="menu__header_logo">
          Menu
        </h3> 
        <div className="menu__header_burger">
          <img src={imgs.menu} alt="burger" width={25}/>
        </div>
      </span>
      <div className="menu__search">
        <input className="input_search" type="text" placeholder="search"/>
      </div>
      <h5>TASKS</h5>
      <Tasks getNameTask={data}/>
      <h5>LISTS</h5>
      <Lists getNameTask={data.getNameTask} addList={data.addList} tasks={data.tasks}/>
    </div>
  )
}

export default Menu