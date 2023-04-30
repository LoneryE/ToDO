import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import Menu from "./components/layout/menu/Menu";
import Wall from "./components/layout/wall/Wall";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      name: 'Today',
      tasks: [
        {id: 1, task: 'asd', completed: false},
        {id: 2, task: 'wwwwwww', completed: true},
        {id: 3, task: 'gsdfq', completed: true},
        {id: 4, task: 'wvvvvvbsdfdf', completed: false}
      ],
      count: 4
    },
    {
      name: 'Work',
      tasks: [
        {id: 1, task: 'asdsss', completed: false},
        {id: 2, task: 'wwwwwwwasdasd', completed: false},
        {id: 3, task: 'gsdfqasd', completed: true},
        {id: 4, task: 'wvvvvvdw123123bsdfdf', completed: false}
      ],
      count: 4
    }
  ])
  const [nameTask, setNametask] = useState('Today')
  const [currentTask, setCurrentTask] = useState(null)

  const unique_id = uuid();

  useEffect(() => {

  }, [tasks])

  const getNameTask = (name) => {
    setNametask(name)
  }

  const getFilterName = (current) => {
    let newArray = tasks
    let newCurrent = newArray.find(el => el === current)
    newCurrent.tasks.sort((a,b) => {
      if (a.task.toLowerCase() < b.task.toLowerCase()) //сортируем строки по возрастанию
        return -1
      if (a.task.toLowerCase() > b.task.toLowerCase())
        return 1
      return 0 //
    })
    return setTasks([...newArray])
  }

  const getFiltterComlete = (current) => {
    let newArray = tasks
    let newCurrent = newArray.find(el => el === current)
    newCurrent.tasks.sort(function(x) {
      return x.completed ? -1 : 1
  })
    return setTasks([...newArray])
  }

  const getCompetedTask = (task, current) => {
    let newArray = tasks
    let newCurrent = newArray.find(el => el === current)
    let newTask = newCurrent.tasks.find(el => el === task)
    newTask.completed = !newTask.completed
    return setTasks([...newArray])
  }

  const deleteTask = (task, current) => {
    let newArray = tasks
    let newCurrent = newArray.find(el => el === current)
    let newTasks = newCurrent.tasks.filter(el => el !== task)
    newCurrent.tasks = newTasks
    setTasks([...newArray])
  }

  const addList = (name) => {
    let newList = false
    for(let i = 0; i < tasks.length; i++){
      if(name === tasks[i].name){
        newList = false
      } else {
        newList = true
      }
    }
    if(newList){
      setTasks([...tasks, {
        name,
        tasks: [],
        count: 0
      }])
    }
  }

  const chooseCurrentTask = () => {
    tasks.map(el => {
      if(el.name === nameTask){
        setCurrentTask(el)
      }
    })
  }

  const addTask = (curruntName, value) => {
    tasks.map(el => {
      if(curruntName === el.name){
        const newTask = {
          id: unique_id,
          task: value,
          completed: false
        }
        let oldTasks = tasks
        el.tasks.push(newTask)
        setTasks([...oldTasks])
      }
    })
    
  }

  useEffect(() => {
    chooseCurrentTask()
  }, [nameTask])
  return (
    <div className="App">
      <Menu getNameTask={getNameTask} addList={addList} tasks={tasks}/>
      <Wall getFiltterComlete={getFiltterComlete} getFilterName={getFilterName} deleteTask={deleteTask} currentTask={currentTask} addTask={addTask} getCompetedTask={getCompetedTask}/>
    </div>
  );
}

export default App;
