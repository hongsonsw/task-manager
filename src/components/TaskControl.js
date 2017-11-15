import React, { Component } from 'react';
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';

class TaskControl extends Component {
  render() {
    return (
        <div className="row mt-15 ">
            <TaskControlSearch onSearch = {this.props.onSearch}/>
            <TaskControlSort 
            	onSort = {this.props.onSort}
            	sortBy = {this.props.sortBy}
            	sortValue = {this.props.sortValue}
            />
        </div>
    );
  }
}

export default TaskControl;
