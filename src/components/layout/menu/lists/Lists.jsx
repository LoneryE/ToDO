import React, { useState } from 'react'
import './Lists.scss'

const Lists = ({getNameTask, addList, tasks}) => {
  const [name, setName] = useState('')
  const add = (name) => {
    addList(name)
  }
  return (
    <div className="lists_list">
      {tasks ? tasks.map((el) => {
        if(el.name === 'Today') return
        return <button key={el.name} onClick={() => getNameTask(el.name)} className="list">{el.name}</button>
      }) : null}
      <div className='lists_list_add'>
        <h3>New List Name</h3>
        <input 
          type="text" 
          value={name}
          placeholder='name'
          onChange={e => setName(e.target.value)}
        />
        <button onClick={() => {
          if(name.length < 1) return
          add(name)
          setName('')
        }} className="add_list">Add New List</button>
      </div>
    </div>
  )
}

export default Lists