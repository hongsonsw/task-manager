import React, { Component } from 'react';
import './App.css';
import AddTaskForm from './components/AddTaskForm';

class App extends Component {
  render() {
    return (
      <div className="container mt-15">
            <div className="text-center">
                Task Management
                <hr></hr>
            </div>

            <AddTaskForm />

            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="row">
                    <button type="button" className="btn btn-success">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        Add Task
                    </button>
                </div>
                <div className="row mt-15 ">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 pl-0">
                        <input 
                            type="text" 
                            name="" 
                            id="input" 
                            className="form-control" 
                            placeholder="Enter task"
                        />
                    </div>
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
                </div>
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
                            <tr>
                                <td>1</td>
                                <td>xxx</td>
                                <td className="center"><span className="label label-active">Active</span></td>
                                <td className="center">
                                    <button type="button" className="btn btn-warning mr-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                                    <button type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>xxx</td>
                                <td className="center"><span className="label label-deactive">Deactive</span></td>
                                <td className="center">
                                    <button type="button" className="btn btn-warning mr-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                                    <button type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>xxx</td>
                                <td className="center"><span className="label label-active">Active</span></td>
                                <td className="center">
                                    <button type="button" className="btn btn-warning mr-5"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button>
                                    <button type="button" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i> Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  
      </div>
    );
  }
}

export default App;
