import React, { Component } from 'react';

class TaskControlSort extends Component {
  render() {
    return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div className="dropdown">
                  <button 
                      className="btn btn-primary dropdown-toggle" 
                      type="button" 
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                  >
                      Sort 
                      <i className="fa fa-sort ml-5" aria-hidden="true"></i>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li className="dropdown-header">Dropdown header 1</li>
                    <li><a href="">HTML</a></li>
                    <li><a href="">CSS</a></li>
                    <li><a href="">JavaScript</a></li>
                    <li className="divider"></li>
                    <li className="dropdown-header">Dropdown header 2</li>
                    <li><a href="">About Us</a></li>
                  </ul>
                </div>
          </div>
    );
  }
}

export default TaskControlSort;
