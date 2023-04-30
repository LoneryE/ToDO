import React from 'react'
import './Tasks.scss'

const Tasks = (data) => {
  return (
    <div className="tasks_list">
      <button onClick={() => {data.getNameTask.getNameTask('Today')}} className="tasks_today">Today</button>
      <button className="tasks_sticky">Sticky Wall</button>
    </div>
  )
}

export default Tasks