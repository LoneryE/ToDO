import React, { useState } from 'react'
import './Wall.scss'
import Modal from '../modal/Modal'

const Wall = ({currentTask, getFiltterComlete, getFilterName, addTask, getCompetedTask, deleteTask}) => {
  const [modal, setModal] = useState(false)

  const getModal = (value) => {
    setModal(value)
  }
  return (
    <div className="wall">
      <div className="wall__header">
        <h1>
          {currentTask ? currentTask.name : null}
        </h1>
        <div className="wall__counter">
          {currentTask ? currentTask.count : null}
        </div>
      </div>
      <div className="wall__tasks">
        <button onClick={() => setModal(true)} className="button__task button__task_add">Add New Task</button>
        {modal ? <Modal addTask={addTask} name={currentTask.name} getModal={getModal}/> : null}
        <div className="filters">
          <h3>Filters</h3>
          <button
            className='button__task button__task_filter_name'
            onClick={() => getFilterName(currentTask)}
          >
            name
          </button>
          <button
            className='button__task button__task_filter_completed'
            onClick={() => getFiltterComlete(currentTask)}
          >
            completed
          </button>
        </div>
        <ul className='wall__tasks__list'>
          {currentTask !== undefined && currentTask !== null && currentTask? currentTask?.tasks.map(el => (
            <li key={el.id} className='wall__tasks__list__elem'>
              <div className='wall__tasks__list__elem_info'>
                <input 
                  className='wall__tasks__list__elem_info__input_check' 
                  type="checkbox"  
                  checked={el.completed}   
                  onChange={() => getCompetedTask(el, currentTask)} 
                />
                <span className='wall__tasks__list__elem_info__task'>{el.task}</span>
              </div>
              <button 
                className="wall__tasks__list__elem__btn_delete"
                onClick={() => deleteTask(el, currentTask)}
              >
                Delete
              </button>
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default Wall