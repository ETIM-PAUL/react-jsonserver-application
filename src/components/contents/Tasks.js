import { useState, useEffect } from 'react';
import AddTask from './AddForm';
import Button from '../Button';
import {FaTimes} from 'react-icons/fa';

const Tasks = () => {

    const[showAddTaskForm, setAddTaskForm] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const showTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        showTasks()
    }, [])
        const fetchTasks = async () => {
            const res = await fetch ('http://localhost:5000/tasks')
            const data = await res.json()
        return data
    }

    //Add Task
    const addTask = async (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        // const newTask = (id, task)
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, id, data])
        // setTasks([...tasks, newTask])
        // console.log(newTask)
    }

    //Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id ===id ? {...task, reminder : !task.reminder } : task
            )
        )
    }

    const viewTask = () => {
        return (
        <>
        <div className="heading">
        <h3>Task Tracker</h3>
        <Button color="#35383c" holder={showAddTaskForm ? 'Close Form' : 'Add Task'} onAdd={() => setAddTaskForm(!showAddTaskForm)}/>
        </div>
        {showAddTaskForm && <AddTask moreTask={addTask} />}
        {tasks.map((task) => (
            <div 
            className={`task ${task.reminder ?
            'reminder' : ''}`}
            onDoubleClick={() => toggleReminder(task.id)} 
            key={task.id}>
                 <h4>{task.content}{' '} <FaTimes onClick={() => deleteTask(task.id)} /></h4>
                 <p>{task.day}</p>
            </div>
           
        ))}
        
           
        </>)
    }
    

    return (
        viewTask()
    )
}

export default Tasks