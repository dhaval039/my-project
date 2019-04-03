import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logincreate } from "../Actions/LoginAction";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const PostForm = {
      userName: this.state.userName,
      password: this.state.password
    };
    if (this.state.userName === "dhaval" && this.state.password === "dhaval") {
      PostForm.login = true;
    }
    this.props.logincreate(PostForm);

    //LoginForm Clear
    this.setState({
      userName: "",
      password: ""
    });
  };

  render() {
    console.log(this.props.LoginReducer.login);
    if (this.props.LoginReducer.login) {
      return <Redirect to={"component/userform"} />;
    }
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="login">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="username">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                className="form-control"
                value={this.state.userName}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="form-control"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
              <small>Already Have an Account</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ LoginReducer }) {
  return {
    LoginReducer
  };
}
export default connect(
  mapStateToProps,
  { logincreate }
)(LoginForm);
