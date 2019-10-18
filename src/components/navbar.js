import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
export default withAuth(class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null,userInfo:{} };
 
  }
  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    console.log(authenticated);

    var accessToken=  await this.props.auth.getAccessToken();
    let userinfo = await this.props.auth.getUser(accessToken);
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated: authenticated,userInfo:userinfo });
    }
  }
  async componentWillMount() {
      // if (!this.state.authenticated )
      // {return null;}
    this.checkAuthentication();
 
  }

  async componentDidUpdate() {
    this.checkAuthentication();
    console.log("entering");
console.log(this.state);
  }

  login = async () => {
    this.props.auth.login('/');
  }

  logout = async () => {
    this.props.auth.logout('/');
  }
 
 showbutton=()=>{
   if(this.state.authenticated )
{
  return(
    <button onClick={this.logout}>Logout</button> 
  )
}  
else{
  return(
    <button onClick={this.login}>Login</button> 
  )
}

 }
    render() {   
      const button = this.state.authenticated ?
  
      <li onClick={this.logout}>Logout</li> :
      <li onClick={this.login}>Login</li>;
        return (
  <div className="row navbar">
    <div className="col-md-5" id="logo">SHOPPER</div>
    <div className="col-md-7">
   <ul className="nav-list">
<Link to="/" className="nav-link"> <li>Home</li></Link>

<Link to="/profile" className="nav-link"><li>Account</li></Link>
<Link to="/cart" className="nav-link"> <li>cart</li></Link>
{button}
</ul>
</div>
      </div>


          );
    }
  }
)
