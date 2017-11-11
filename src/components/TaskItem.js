import React, { Component } from 'react';

class TaskItem extends Component {

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onRemoveTask = () => {
        this.props.onRemoveTask(this.props.task.id);
    }

  render() {
    var {task, index} = this.props;

    // console.log('type of Task :' + typeof(task));
    // console.log('taskid : ' + typeof(task.status));
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="center">
                <span
                    onClick = {this.onUpdateStatus}
                    className={task.status ? 'label label-success' : 'label label-danger'}
                >
                    {task.status ? 'Active' : 'Deactive'}
                </span>
            </td>
            <td className="center">
                <button type="button" className="btn btn-warning mr-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                <button type="button" onClick={this.onRemoveTask} className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
            </td>
        </tr>
    );
  }
}
 
export default TaskItem;
