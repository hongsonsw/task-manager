import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    var {tasks} = this.props;
    var elmTasks = tasks.map((task, index) => {
        return <TaskItem key={task.id} index={index} task={task}/>
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
                        <td><input type="text" name="" id="input" className="form-control" value="" required="required" pattern="" title="" /></td>
                        <td>
                            <select name="" id="input" className="form-control" required="required">
                                <option value="">All</option>
                                <option value="">Active</option>
                                <option value="">Deactive</option>
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
