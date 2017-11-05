import React, { Component } from 'react';

class TaskControlSearch extends Component {
  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pl-0">
            <input 
                type="text" 
                name="" 
                id="input" 
                className="form-control" 
                placeholder="Enter task"
            />
        </div>
    );
  }
}

export default TaskControlSearch;
