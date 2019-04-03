import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createPost, editePost, removePost } from "../Actions/PostAction";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      countryName: "",
      email: "",
      password: "",
      firstNameError: "",
      lastNameError: "",
      userNameError: "",
      countryNameError: "",
      emailError: "",
      passwordError: ""
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = () => {
    let firstNameError = "";
    let lastNameError = "";
    let userNameError = "";
    let countryNameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.firstName) {
      firstNameError = "first name connot be blank";
    }
    if (!this.state.lastName) {
      lastNameError = "last name connot be blank";
    }
    if (!this.state.userName) {
      userNameError = "user name connot be blank";
    }
    if (!this.state.countryName) {
      countryNameError = "country name connot be blank";
    }
    if (!this.state.email) {
      emailError = "email connot be blank";
    }
    if (!this.state.password) {
      passwordError = "password connot be blank";
    }
    if (
      firstNameError ||
      lastNameError ||
      userNameError ||
      countryNameError ||
      emailError ||
      passwordError
    ) {
      this.setState({
        firstNameError,
        lastNameError,
        userNameError,
        countryNameError,
        emailError,
        passwordError
      });
      return false;
    }
    return true;
  };

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.index);
    const isValid = this.validate();

    if (isValid) {
      if (this.state.editMode) {
        const data = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          countryName: this.state.countryName,
          email: this.state.email,
          password: this.state.password,
          index: this.state.index
        };
        this.props.editePost(data);
        this.setState({
          firstName: "",
          lastName: "",
          userName: "",
          countryName: "",
          email: "",
          password: "",
          index: ""
        });
      } else {
        const Postdata = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          countryName: this.state.countryName,
          email: this.state.email,
          password: this.state.password
        };
        this.props.createPost(Postdata);
        //Clear Form
        this.setState({
          firstName: "",
          lastName: "",
          userName: "",
          countryName: "",
          email: "",
          password: ""
        });
      }
      this.setState({ editMode: false });
    }
    // else {
    //   alert("Fill Form Properly");
    // }
  }

  handlechange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  editeData = index => {
    this.setState({
      firstName: this.props.posts[index].firstName,
      lastName: this.props.posts[index].lastName,
      userName: this.props.posts[index].userName,
      countryName: this.props.posts[index].countryName,
      email: this.props.posts[index].email,
      password: this.props.posts[index].password,
      editMode: true
    });
  };
  dataRemove(index) {
    this.props.removePost(index);
  }
  handlercancle = () => {
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      countryName: "",
      email: "",
      password: "",
      editMode: false
    });
  };
  renderTable() {
    return (
      <tbody>
        {this.props.posts.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.userName}</td>
              <td>{data.countryName}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>
                <button
                  onClick={this.editeData.bind(this, index)}
                  className="btn btn-success"
                  style={{ marginRight: "5px" }}
                >
                  <i class="fa fa-edit" />
                </button>
                <button
                  onClick={this.dataRemove.bind(this, index)}
                  className="btn btn-danger"
                >
                  <i class="fa fa-trash" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  render() {
    if (!this.props.LoginReducer.login) {
      return <Redirect to="/" />;
    }
    return (
      <div className="be-content container">
        <div className="main-content">
          <form onSubmit={this.handleSubmit} className="form-cover container">
            <h1 className="page-header border-bottom">User Form</h1>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handlechange}
                  />
                  <div style={{ color: "red" }}>
                    {this.state.firstNameError}
                  </div>
                </div>
              </div>
              <div className="co-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handlechange}
                  />
                  <div style={{ color: "red" }}>{this.state.lastNameError}</div>
                </div>
              </div>
              <div className="co-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <input
                    type="text"
                    name="userName"
                    className="form-control"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.handlechange}
                  />
                  <div style={{ color: "red" }}>{this.state.userNameError}</div>
                </div>
              </div>
              <div className="co-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <select
                    className="form-control"
                    name="countryName"
                    value={this.state.countryName}
                    onChange={this.handlechange}
                  >
                    <option>country</option>
                    <option>India</option>
                    <option>USA</option>
                  </select>
                  <div style={{ color: "red" }}>
                    {this.state.countryNameError}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handlechange}
                  />
                  <div style={{ color: "red" }}>{this.state.emailError}</div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlechange}
                  />
                  <div style={{ color: "red" }}>{this.state.passwordError}</div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-info">
              <i className="fa fa-save">&nbsp;</i>
              SUBMIT
            </button>
            <button
              onClick={this.handlercancle}
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: "10px" }}
            >
              <i className="fa fa-times">&nbsp;</i>
              CANCLE
            </button>
          </form>

          <table className="table form-cover">
            <thead className="thead">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Country Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col" style={{ width: "170px" }} />
              </tr>
            </thead>
            {this.renderTable()}
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, LoginReducer }) {
  return {
    posts,
    LoginReducer
  };
}

export default connect(
  mapStateToProps,
  { createPost, editePost, removePost }
)(Form);
