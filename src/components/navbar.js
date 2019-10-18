import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class navbar extends Component {
    render() {   
        return (
  <div>
<Link to="/"> <h3>Home</h3></Link>

<Link to="/cart"> <h3>cart</h3></Link>

      </div>


          );
    }
  }
  export default navbar;