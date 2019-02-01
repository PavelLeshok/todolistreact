import React, { Component } from 'react';
import { Item} from 'semantic-ui-react';
import Header from './components/header/Header';
import Task from './components/task/Task';
import AppMenu from './components/appMenu/AppMenu';
import './App.css';

class App extends Component {

  state = {
    tasks: [],
    filteredTasks: [],
    targetTask: []
  };
  
  fetchData = async () => {
    const data = await fetch('http://192.168.0.103:3001/api/task');
    const tasks = await data.json();
    this.setState({
      tasks
    });
  
    this.getValue();
  }; //app component

  postData = async (formData) => {
    const{title, text, priority, completed} = formData;
    const time = new Date();
    const localTime = time.toLocaleDateString();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const days = localTime.slice(0, 2)
    const months =  localTime.slice(3, 5)
    const years = localTime.slice(6);
    const date = ` ${years}.${months}.${days} ${hours}:${minutes}`;
    console.log(date);
    const data = {
      title,
      text,
      priority,
      date,
      completed 
    };
    const options = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    const res = await fetch('http://192.168.0.103:3001/api/task', options);
    console.log(res)
    this.fetchData()
  }; // createtaskform component

  deleteData = async (id) => {
    const task = this.state.tasks.filter( task => {
      return task._id === id
    });
    const options = {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    };
    const res = await fetch('http://192.168.0.103:3001/api/task', options);
    console.log(res)
    this.fetchData()
  } //task component
  
  updateData = async (obj) => {
    const options = {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    };
    const res = await fetch('http://192.168.0.103:3001/api/task', options);
    console.log(res)
    this.fetchData()
  } 

  getValue = (value = 'all') => {
    const tasksCopy = [...this.state.tasks];
    if(value === 'all') {this.setState({filteredTasks: tasksCopy})
      } else {
      const filteredTasks = tasksCopy.filter( task => {
        return task.priority === value
      })
      this.setState({filteredTasks})
    }
  } // handle filter by priority

  changeSortDirection = () => {
    const filteredTasksCopy = [...this.state.filteredTasks].sort((a, b) => a.date - b.date)
    this.setState({filteredTasks: filteredTasksCopy.reverse()})
  } // handle sort by date

  completeChange = (id) => {
    const tasksCopy = [...this.state.tasks];
    tasksCopy.forEach((task) => {
     if(task._id === id) task.completed = !task.completed;
    });
    this.setState({
      tasks:tasksCopy
    })
  };  // task component
 
  componentDidMount(){
    this.fetchData()
  };

  render() {
    const {filteredTasks, targetTask} = this.state
    return (
      <div className="app-container">
        <Header />     
        <div className='tasks-container'>
          <AppMenu
          getState = {this.postData}
          getValue = {this.getValue}
          changeSortDirection={this.changeSortDirection}
          />
          <Item.Group>
            <Task
            targetTask = {targetTask}
            tasks = {filteredTasks}
            getTaskId = {this.completeChange}
            deleteTask = {this.deleteData}
            updateTask = {this.updateData}
            />
          </Item.Group>
        </div>
      </div> 
    );
  }
}

export default App;
