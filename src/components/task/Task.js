import React from 'react';
import UpdateFormButton from '../updateFormButton/UpdateFormButton';
import { Item, Icon, Button, Checkbox } from 'semantic-ui-react';
import './task.css';

const Task = ({targetTask, tasks, getTaskId, deleteTask, updateTask}) => {
    const monthes = ["January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December"];
    
    return(
        tasks.map((task) => {
            const monthNumber= +task.date.slice(6, 8);
            const month = monthes[monthNumber -1];
            const date = `${task.date.slice(9, 11)} ${month} ${task.date.slice(1, 5)} ${task.date.slice(12)}`
            return <Item id='task-container' key={task._id}>
                <Item.Content id='task-content'>
                   {task.completed && <span id='task-checked'><Icon color='green' name='check' />Completed</span>} 
                    <Item.Description id='task-priority'>Priority: {task.priority}</Item.Description>
                    <Item.Header id='task-title'>{task.title}</Item.Header> 
                    <Item.Description>{task.text}</Item.Description>
                    <Item.Extra>{date}</Item.Extra>
                    <Item.Extra id='task-buttons'>
                        <Checkbox label='Completed'
                        onChange={() => getTaskId(task._id)}
                        />
                        <UpdateFormButton
                        id='task-updateformbutton'
                        task = {task}
                        targetTask = {targetTask}
                        updateTask = {updateTask}
                        />
                        <Button
                        floated='right'
                        id='task-button-delete'
                        onClick={() => deleteTask(task._id)}  
                        >Delete</Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        }) 
    )
} 

export default Task