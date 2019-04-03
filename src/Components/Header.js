import React, { Component } from "react";
import "../Components/Header.css";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="shadow-sm">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
              <h1>
                React <span className="secondry">Application</span>
              </h1>
              <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                <li className="nav-item">
                  <NavLink exact className="nav-link" to={"userform"}>
                    User Form
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to={"datalist"}>
                    Data List
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink exact className="nav-link" to={"deeparatment"}>
                    Deepartment
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink exact className="nav-link" to={"academiclinfo"}>
                    Academiclinfo
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink exact className="nav-link" to={"feestransaction"}>
                    Fees
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
