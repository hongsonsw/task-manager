import React, { Component } from 'react';

class AddTaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            status: false
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name : '',
            status : false
        })
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
                        <form onSubmit = {this.onSubmit}>
                            <div className="form-group">
                                <label >Name : </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    className="form-control" 
                                    placeholder="Input field" 
                                    value = {this.state.name}
                                    onChange = {this.onChange}
                                />
                                <label >Status : </label>
                                <select 
                                    name="status" 
                                    id="input" 
                                    className="form-control"
                                    value = {this.state.status}
                                    onChange = {this.onChange}
                                >
                                    <option value={true}> Active </option>
                                    <option value={false}> Deactive </option>
                                </select>
                            </div>
                            <button 
                                type="submit" 
                                className="btn btn-success mr-5"
                            >
                                <i className="fa fa-plus" aria-hidden="true">
                                </i>
                                Save
                            </button>
                            <button 
                                type="reset" 
                                className="btn btn-danger"
                                onClick = {this.onClear}
                            >
                                <i className="fa fa-ban" aria-hidden="true">
                                </i> 
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
    );
  }
}

export default AddTaskForm;
