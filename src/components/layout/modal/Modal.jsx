import React, { useState } from 'react'
import './Modal.scss'

const Modal = ({addTask, name, getModal}) => {
  const [value, setValue] = useState('')
  return (
    <div className='modal'>
      <div className="modal_add">
        <div className="header">
          <h3>New Task</h3>
          <button onClick={() => getModal(false)}>Close</button>
        </div>
        <input 
          type="text"
          placeholder='task'
          value={value}
          onChange={elem => setValue(elem.target.value)}
        />
        <button onClick={() => {
          if(value.length < 1) return
          addTask(name, value)
          getModal(false)
        }}>Confirm</button>
      </div>
    </div>
  )
}

export default Modal