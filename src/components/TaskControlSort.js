import React, { Component } from 'react';

class TaskControlSort extends Component {

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }

    onClick = (sortBy, sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        var sortBy = this.props.sortBy;
        var sortValue = this.props.sortValue;
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
                        <li className="dropdown-header">Sort by name</li>
                        <li onClick={ () => this.onClick('name', 1)}>
                            <a 
                                role="button" 
                                className={(sortBy === 'name' && sortValue ===1) ? 'sort_selected' : ''}
                            >
                                <span className = "fa fa-sort-alpha-asc pr-5">
                                </span>A -> Z
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('name', -1)}>
                            <a 
                                role="button"
                                className={(sortBy === 'name' && sortValue ===-1) ? 'sort_selected' : ''}
                            >
                                <span className = "fa fa-sort-alpha-desc pr-5">
                                </span>Z -> A
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li className="dropdown-header">Sort by status</li>
                        <li onClick={ () => this.onClick('status', 1)}>
                            <a 
                                role="button"
                                className={(sortBy === 'status' && sortValue ===1) ? 'sort_selected' : ''}
                            >
                                <span className = "fa fa-sort-alpha-desc pr-5">
                                </span>Active
                            </a>
                        </li>
                        <li onClick={ () => this.onClick('status', -1)}>
                            <a 
                                role="button"
                                className={(sortBy === 'status' && sortValue ===-1) ? 'sort_selected' : ''}
                            >
                                <span className = "fa fa-sort-alpha-desc pr-5">
                                </span>Deactive
                            </a>
                        </li>
                      </ul>
                    </div>
              </div>
        );
    }
}

export default TaskControlSort;
