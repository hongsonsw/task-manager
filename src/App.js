import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [], //id :unique, name, status
            isDisplayForm : false
        }
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    onSubmit = (data) => {
        var tasks = this.state.tasks;
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks : tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
    }

    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id) => {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });
        return result;
    }


  render() {
    var {tasks, isDisplayForm} = this.state;
    var elmTaskFrom = isDisplayForm 
        ? <AddTaskForm onSubmit={this.onSubmit} onCloseForm = {this.onCloseForm}/>
        : '';
    return (
      <div className="container">
            <div className="text-center">
                Task Management
                <hr></hr>
            </div>
            {elmTaskFrom}
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                <div className="row">
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick = {this.onToggleForm}
                    >
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Add Task
                    </button>
                </div>
                <TaskControl />
                <TaskList 
                    tasks = { tasks }
                    onUpdateStatus = {this.onUpdateStatus}
                />
            </div>  
      </div>
    );
  }
}
 
export default App;
