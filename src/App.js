import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import AddTask from './components/AddTask';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [] //id :unique, name, status
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

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateID(),
                name : 'Learn',
                status: true
            },
            {
                id: this.generateID(),
                name : 'Game',
                status: false
            },
            {
                id: this.generateID(),
                name : 'PingPong',
                status: true
            },
        ]
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
    }

  render() {
    var {tasks} = this.state;
    return (
      <div className="container">
            <div className="text-center">
                Task Management
                <hr></hr>
            </div>

            <AddTaskForm />

            <button 
                type="button" 
                className="btn btn-danger mt-15"
                onClick={this.onGenerateData}
            >
                <i className="fa fa-plus" aria-hidden="true"></i>
                Generate Data
            </button>

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <AddTask />
                <TaskControl />
                <TaskList tasks = { tasks }/>
            </div>  
      </div>
    );
  }
}
 
export default App;
