import React, { Component } from "react";
import { connect } from "react-redux";
import { feesData } from "../Actions/FeesTransactionAction";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Modal from "react-awesome-modal";

class Fees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "",
      transactionDate: "",
      admissionNo: "",
      admissioDate: "",
      rollNumber: "",
      // firstName: "",
      middlename: "",
      lastName: "",
      visible: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangedate = this.handleChangedate.bind(this);
  }
  openModal = () => {
    this.setState({
      visible: true
    });
  };
  closeModal = () => {
    this.setState({
      visible: false
    });
  };
  escClose = () => {
    this.setState({
      visible: false
    });
  };
  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange(date) {
    this.setState({
      transactionDate: date
    });
  }
  handleChangedate(date) {
    console.log(date);
    this.setState({
      admissioDate: date
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      studentName: this.state.studentName,
      transactionDate: this.state.transactionDate,
      admissionNo: this.state.admissionNo,
      admissioDate: this.state.admissioDate,
      rollNumber: this.state.rollNumber,
      // firstName: this.state.firstName,
      middlename: this.state.middlename,
      lastName: this.state.lastName
    };
    this.props.feesData(data);
    this.setState({
      studentName: "",
      transactionDate: "",
      admissionNo: "",
      admissioDate: "",
      admissioDate: "",
      rollNumber: "",
      middlename: "",
      lastName: ""
    });
  }

  render() {
    return (
      <div className="main-content container">
        <h3 className="header-bg">Fees</h3>
        <form onSubmit={this.handleSubmit}>
          <section>
            <div className="row form_cover">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 col">
                    <div className="form-group">
                      <label className="required">Student Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="studentName"
                        value={this.state.studentName}
                        onChange={this.onInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col">
                    <div className="form-group">
                      <label className="required">Transaction Date</label>
                      <DatePicker
                        className="form-control"
                        selected={this.state.transactionDate}
                        onChange={this.handleChange}
                        showYearDropdown
                        showMonthDropdown
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col m-1">
                    <button
                      type="button"
                      className="btn btn-success btn-sm"
                      onClick={this.openModal}
                    >
                      <i className="fa fa-plus">&nbsp; </i>
                      Add Other details
                    </button>
                    {/* <button type="button" className="btn btn-success btn-md">
                      Fees Details
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <Modal
              visible={this.state.visible}
              width="700"
              height="300"
              effect="fadeInRight"
              onClickAway={this.closeModal}
            >
              <div className="be-content container">
                <h3>Add Student</h3>
                {/* <p>Some Contents</p> */}
                <form>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="required">Admission No</label>
                        <input
                          type="text"
                          name="admissionNo"
                          className="form-control"
                          value={this.state.admissionNo}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="required">Admission Date</label>
                        <DatePicker
                          className="form-control"
                          // name="admissioDate"
                          // value={this.state.admissioDate}
                          // onChange={this.onInputChange}
                          selected={this.state.admissioDate}
                          onChange={this.handleChangedate}
                          showYearDropdown
                          showMonthDropdown
                          // onChange={this.onInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label>Roll No</label>
                        <input
                          type="text"
                          className="form-control"
                          name="rollNumber"
                          value={this.state.rollNumber}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="required">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="studentName"
                          label="First Name"
                          value={this.state.studentName}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="required">Middle Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="middlename"
                          value={this.state.middlename}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label className="required">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.onInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-success btn-sm">
                      {/* <i className="fa fa-save">&nbsp;</i> */}
                      <i className="fa fa-save">&nbsp;</i>
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      style={{ marginLeft: "10px" }}
                      onClick={this.closeModal}
                    >
                      <i className="fa fa-times">&nbsp;</i>
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </section>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ masters: { feesTransaction } }) {
  return {
    feesTransaction
  };
}
export default connect(
  mapStateToProps,
  { feesData }
)(Fees);

// export default Fees;
