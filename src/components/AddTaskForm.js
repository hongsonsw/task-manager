import React, { Component } from 'react';

class AddTaskForm extends Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

  render() {
    return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add Task 
                            <i 
                                className="fa fa-times-circle-o right" 
                                aria-hidden="true"
                                onClick={this.onCloseForm}
                            >
                            </i>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form action="" method="POST">
                            <div className="form-group">
                                <label >Name : </label>
                                <input type="text" className="form-control" id="" placeholder="Input field" />
                                <label >Status : </label>
                                <select name="" id="input" className="form-control">
                                    <option value=""> Active </option>
                                    <option value=""> Deactive </option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-success mr-5"><i className="fa fa-plus" aria-hidden="true"></i> Save</button>
                            <button type="submit" className="btn btn-danger"><i className="fa fa-ban" aria-hidden="true"></i> Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
    );
  }
}

export default AddTaskForm;
