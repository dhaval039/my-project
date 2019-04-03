import React, { Component } from "react";
import { connect } from "react-redux";
import { experienceDeta } from "../Actions/AcademicinfoAction";
class Academiciinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      organisation: "",
      period: "",
      assignment: "",
      experience: [{}]
      // arryData: []
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.dataSubmit = this.dataSubmit.bind(this);
    // this.handleExperienceAdd = this.handleExperienceAdd.bind(this);
  }

  handlerChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  dataSubmit = e => {
    e.preventDefault();
    const dataPost = {
      position: this.state.position,
      organisation: this.state.organisation,
      period: this.state.period,
      assignment: this.state.assignment
    };
    this.props.experienceDeta(dataPost);
  };
  handleAdd = () => {
    this.setState({
      experience: this.state.experience.concat([{ name: "" }])
    });
  };

  handleExperienceDelete = index => {
    this.state.experience.splice(index, 1);
    this.setState({
      experience: this.state.experience
    });
  };
  render() {
    return (
      <div className="be-content">
        <div className="main-content container">
          <h3 className="header-bg">Experience</h3>
          <div className="form_cover">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>SR.No</th>
                  <th>Position</th>
                  <th>Organisation</th>
                  <th>Period</th>
                  <th>Assignment</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.experience.map((experience, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="position"
                        value={this.state.position}
                        onChange={this.handlerChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="organisation"
                        value={this.state.organisation}
                        onChange={this.handlerChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="period"
                        value={this.state.Period}
                        onChange={this.handlerChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        name="assignment"
                        value={this.state.assignment}
                        onChange={this.handlerChange}
                      />
                    </td>
                    <td className="text-right">
                      {this.state.experience.length > 1 && (
                        <button
                          className="btn btn-danger btn-md"
                          onClick={this.handleExperienceDelete}
                        >
                          <i className="fa fa-trash" />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="6">
                    <center>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={this.handleAdd}
                      >
                        <i className="fa fa-plus">&nbsp; </i>
                        Add Row
                      </button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row exper">
            <div className="col-lg-12">
              <button
                type="submit"
                className="btn btn-danger btn-md"
                onClick={this.dataSubmit}
              >
                <i className="fa fa-save">&nbsp;</i>
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ masters: { academicinfo } }) {
  return {
    academicinfo
  };
}
export default connect(
  mapStateToProps,
  { experienceDeta }
)(Academiciinfo);
