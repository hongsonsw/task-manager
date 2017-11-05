import React, { Component } from 'react';

class AddTask extends Component {
  render() {
    return (
        <div className="row mt-15">
            <button type="button" className="btn btn-success">
                <i className="fa fa-plus" aria-hidden="true"></i>
                Add Task
            </button>
        </div>
    );
  }
}

export default AddTask;
