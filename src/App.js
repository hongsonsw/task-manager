import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import _ from 'lodash';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks : [], //id :unique, name, status
            isDisplayForm : false,
            taskEditing : null,
            filter : {
            	name : '',
            	status : -1
            },
            keyword : '',
            sortBy : 'name',
            sortValue : 1
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
        if (this.state.taskEditing) {
            if(this.state.isDisplayForm) {
                this.setState({
                    taskEditing : null
                })
            }
        } else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
            })
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm : false
        })
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm : true
        });
    }

    onSubmit = (data) => {
        var tasks = this.state.tasks;
        if (data.id) {
            console.log('edit');
            var index = this.findIndex(data.id);
            tasks[index] = data;
        } else {
            console.log('add new');
            data.id = this.generateID();
            tasks.push(data);
        }
        this.setState({
            tasks : tasks,
            taskEditing : null
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

    onRemoveTask = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if(index !== -1) {
            tasks.splice(index, 1);
            this.onCloseForm();           
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));

        }
    }

    onUpdate = (id) => {
        // console.log(id);
        var { tasks } = this.state;
        // var index = this.findIndex(id);
        var index = _.findIndex(tasks, id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing : taskEditing
        });
        this.onShowForm();
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

    onFilter = (filterName, filterStatus) => {
    	// console.log(filterName + ' : ' +filterStatus);
    	filterStatus = parseInt(filterStatus, 10);
    	this.setState({
	    	filter :
	    	{
	    		name : filterName,
	    		status : filterStatus
	    	}
	    })
    }

    onSearch = (keyword) => {
    	this.setState({
    		keyword : keyword
    	});
    }

    onSort = (sortBy, sortValue) => {
    	this.setState({
    		sortBy : sortBy,
    		sortValue : sortValue
    	});
    }

  render() {
    var {
    	tasks, 
    	isDisplayForm, 
    	taskEditing, 
    	filter, 
    	keyword,
    	sortBy,
    	sortValue
    } = this.state;
	if(filter.name) {
		// tasks = tasks.filter((task) => {
		// 	return task.name.toLowerCase().indexOf(filter.name) !== -1;
		// });
		
		tasks = _.filter(tasks, (task) => {
			return _.includes(task.name.toLowerCase(), filter.name.toLowerCase());
		});
	}

	tasks = tasks.filter((task) => {
		if (filter.status === -1) {
			return task;
		} else {
			return task.status === (filter.status === 1 ? true : false);
		}
	});

	if (keyword) {
		tasks = tasks.filter((task) => {
			return task.name.toLowerCase().indexOf(keyword) !== -1;
		});
	}

	if (sortBy === 'name') {
		tasks.sort((a,b) => {
			if (a.name > b.name) return sortValue;
			else if (a.name < b.name) return -sortValue;
			else return 0;
		});
	} else {
		tasks.sort((a,b) => {
			if (a.status < b.status) return sortValue;
			else if (a.status > b.status) return -sortValue;
			else return 0;
		});
	}

    var elmTaskFrom = isDisplayForm 
        ? <AddTaskForm 
            onSubmit={this.onSubmit} 
            onCloseForm = {this.onCloseForm}
            task = {taskEditing}
        />
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
                <TaskControl 
                	onSearch = {this.onSearch}
                	onSort = {this.onSort}
                	sortBy = {sortBy}
                	sortValue = {sortValue}
                />
                <TaskList 
                    tasks = { tasks }
                    onUpdateStatus = {this.onUpdateStatus}
                    onRemoveTask = {this.onRemoveTask}
                    onUpdate = {this.onUpdate}
                    task = {taskEditing}
                    onFilter = {this.onFilter}
                />
            </div>  
      </div>
    );
  }
}
 
export default App;
