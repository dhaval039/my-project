import React, { Component } from "react";

import { connect } from "react-redux";
import { departmentData } from "../Actions/DepartmentAction";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
class Deepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deepartmentName: "",
      shortName: "",
      hierarchyNo: "",
      deepartmentError: "",
      shortNameError: "",
      hierarchyNoError: "",
      showForm: false,
      rowData: [],

      // columnDefs: [
      //   { headerName: "Firs Name", field: "make" },
      //   { headerName: "Last Name", field: "model" },
      //   { headerName: "User Name", field: "price" },
      //   { headerName: "Email", field: "price" }
      // ],
      // rowData: [
      //   { make: "Toyota", model: "Celica", price: 35000 },
      //   { make: "Ford", model: "Mondeo", price: 32000 },
      //   { make: "Porsche", model: "Boxter", price: 72000 }
      // ]

      colDefs: [
        {
          headerName: "SrNo",
          width: 80,
          valueGetter: "parseInt(node.id)+1",
          cellRenderer: function(params) {
            return params.value;
          }
        },
        { field: "DepartmentName", headerName: "Department Name" },
        { field: "ShortName", headerName: "Short name" },
        { field: "HierarchyNo", headerName: "Hierarchy No" },
        // {
        //   headerName: "Active",
        //   cellRendererFramework: IsActive
        // },
        {
          headerName: "Actions",
          // cellRendererFramework: GridActions,
          field: "Id",
          colId: "params",
          suppressFilter: true,
          enableSorting: false
        }
      ]
    };

    this.showForm = this.showForm.bind(this);
    this.handlersubmit = this.handlersubmit.bind(this);
    this.handlerchange = this.handlerchange.bind(this);
  }
  showForm = () => {
    this.setState({ showForm: true });
  };
  hideform = () => {
    this.setState({ showForm: false });
  };

  handlerchange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let deepartmentError = "";
    let shortNameError = "";
    let hierarchyNoError = "";

    if (!this.state.deepartmentName) {
      deepartmentError = "deepartment name connot be blank";
    }
    if (!this.state.shortName) {
      shortNameError = "short name connot be blank";
    }
    if (!this.state.hierarchyNo) {
      hierarchyNoError = "number connot be blank";
    }
    if (deepartmentError || shortNameError || hierarchyNoError) {
      this.setState({
        deepartmentError,
        shortNameError,
        hierarchyNoError
      });
      return false;
    }
    return true;
  };
  handlersubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const PostDeepartment = {
        DepartmentName: this.state.deepartmentName,
        ShortName: this.state.shortName,
        HierarchyNo: this.state.hierarchyNo
      };
      this.props.departmentData(PostDeepartment);
      // clear Data
      this.setState({
        deepartmentName: "",
        shortName: "",
        hierarchyNo: ""
      });
    } else {
      alert("Fill Form Properly");
    }
  };
  render() {
    return (
      <div className="be-content">
        <div className="main-content container">
          <h3>
            <div className="row">
              <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12">
                <h3 className="header-bg">Department</h3>
              </div>
              {!this.state.showForm && (
                <div className="form-group">
                  <button
                    onClick={this.showForm}
                    type="submit"
                    className="btn btn-success btn-small addnew_btn"
                  >
                    <i className="fa fa-plus">&nbsp;</i>
                    Add New Department
                  </button>
                </div>
              )}
            </div>
          </h3>

          <form onSubmit={this.handlersubmit}>
            {this.state.showForm && (
              <div className="row form_cover">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="required">Department Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="deepartmentName"
                      value={this.state.deepartmentName}
                      onChange={this.handlerchange}
                    />
                    <div style={{ color: "red" }}>
                      {this.state.deepartmentError}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="required">Short Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="shortName"
                      value={this.state.shortName}
                      onChange={this.handlerchange}
                    />
                    <div style={{ color: "red" }}>
                      {this.state.shortNameError}
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="required">Hierarchy No</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hierarchyNo"
                      value={this.state.hierarchyNo}
                      onChange={this.handlerchange}
                    />
                    <div style={{ color: "red" }}>
                      {this.state.hierarchyNoError}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label>Is Active?</label>

                    <br />
                    <label className="switch">
                      <input
                        type="checkbox"
                        // checked={this.state.isActive}
                        name="isActive"
                        // onChange={this.onSwitchToggle}
                      />
                      <span className="slider round" />
                    </label>
                  </div>
                </div>
                <div className="col col-lg-12">
                  <button type="submit" className="btn btn-success btn-md">
                    <i className="fa fa-save">&nbsp;</i>
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={this.hideform}
                    className="btn btn-danger btn-md"
                    style={{ marginLeft: "10px" }}
                  >
                  <i className="fa fa-times">&nbsp;</i>
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="row form_cover">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                className="ag-theme-balham"
                style={{
                  height: "300px",
                  width: "100%"
                }}
              >
                <AgGridReact
                  enableSorting={true}
                  enableFilter={true}
                  columnDefs={this.state.colDefs}
                  rowData={this.props.departments}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ masters: { departments } }) {
  return {
    departments
  };
}
export default connect(
  mapStateToProps,
  { departmentData }
)(Deepartment);

// export default Deepartment;
