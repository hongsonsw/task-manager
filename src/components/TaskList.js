import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1 //all : -1, active : 1, deactive : 0
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
        )
        this.setState({
            [name] : value
        });
    }

  render() {
    var {tasks} = this.props;
    var {filterName, filterStatus} = this.state;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem
                    key={task.id} 
                    index={index} 
                    task={task}
                    onUpdateStatus={this.props.onUpdateStatus}
                    onRemoveTask = {this.props.onRemoveTask}
                    onUpdate={this.props.onUpdate}
                />
    });
    return (
        <div className="row mt-15">
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                name="filterName" 
                                id="input" 
                                className="form-control" 
                                value={filterName} 
                                onChange = {this.onChange}
                                required="required" 
                            />
                        </td>
                        <td>
                            <select 
                                name="filterStatus"
                                id="input"
                                className="form-control"
                                required="required"
                                value={filterStatus}
                                onChange = {this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Deactive</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        </div>
    );
  }
}
 
export default TaskList;
