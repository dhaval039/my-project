import React, { Component } from "react";
import { connect } from "react-redux";

class DataList extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="header-bg">Data List</h3>
        <table className="table form-cover ">
          <thead className="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">User Name</th>
              <th scope="col">country Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col" style={{ width: "170px" }} />
            </tr>
          </thead>
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
                      className="btn btn-success"
                      style={{ marginRight: "5px" }}
                    >
                      <i class="fa fa-edit" />
                    </button>
                    <button className="btn btn-danger">
                      {" "}
                      <i class="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(
  mapStateToProps,
  {}
)(DataList);
