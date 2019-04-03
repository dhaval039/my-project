import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import DataList from "./DataList";
import Form from "./Form";
import Header from "./Header";
import Deepartment from "./DepartmentMaster";
import Academiclinfo from "./Academicinfo";
import Fees from "./FeesTransaction";

class Components extends Component {
  constructor(props) {
    super(props);
    // this.state = { loggedin: false };
  }

  componentDidMount() {
    // this.props.checkUserToken(localStorage.getItem("token"), 1);
  }
  componentDidUpdate() {
    // if (this.props.auth.logOut === true) {
    //   this.props.logout();
    // }
  }

  render() {
    // if (this.props.auth.logOut === true) {
    //   return <Redirect to="/" />;
    // }

    return (
      <div>
        <Header />
        <Route exact path="/component/DataList" component={DataList} />
        <Route exact path="/component/userform" component={Form} />
        <Route exact path="/component/deeparatment" component={Deepartment} />
        <Route
          exact
          path="/component/academiclinfo"
          component={Academiclinfo}
        />
        <Route exact path="/component/feestransaction" component={Fees} />
      </div>
    );
  }
}
function mapStateToProps({}) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Components);
