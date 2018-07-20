import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
      <nav>
        <Link to="/main" activeClassname="active">Borabot</Link>
        {" / "}
        <Link to="/board" activeClassname="active">Board</Link>
                <Link to="/backtesting" activeClassname="active">BackTesting</Link>
        <Link to="profile" activeClassname="active">Profile</Link>
        <Link to="/" activeClassname="active">Init</Link>
        {this.props.children}
      </nav>
    );
  }
}