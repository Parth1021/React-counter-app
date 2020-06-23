import React, { Component } from 'react';
class navbar extends Component {
    render() { 
        return ( 
        <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-light">
        {this.props.totalCounters}
        </span>  
        </a>
      </nav> 
      );
    }
}
 
export default navbar;