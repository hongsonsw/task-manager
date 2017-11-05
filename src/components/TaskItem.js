import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    var {task, index} = this.props;
    console.log('taskid : ' + typeof(task.status));
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td className="center">
                <span
                    className={task.status === 'true' ? 'label label-success' : 'label label-danger'}
                >
                    {task.status === 'true' ? 'Active' : 'Deactive'}
                </span>
            </td>
            <td className="center">
                <button type="button" className="btn btn-warning mr-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                <button type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
            </td>
        </tr>
    );
  }
}
 
export default TaskItem;
