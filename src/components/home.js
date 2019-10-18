import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Avatar from '../images/profile.png';
import Prolist from './prolist';
export default withAuth(class Home extends Component {
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
  showInfo=()=>{
    console.log(this.state.userInfo);
    if(this.state.userInfo){
      return(
        <div>
  <img src={Avatar} alt="avatar" width="100" height="100"/>
 <h3>Name: {this.state.userInfo.name}</h3>
        <h3>Email: {this.state.userInfo.email}</h3>
        <h3>Zone: {this.state.userInfo.zoneinfo}</h3>
        <h3>Status:Active</h3> 
      </div>)
    }
    else{
      return(
        <h3>Nothing to show</h3>
      )
    }
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
  
    // if (this.state.authenticated === null)
    // {return null;}
console.log("render");
    const button = this.state.authenticated ?
  
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;

    return (
      <div>
      
        {button}

        {this.showInfo()}
        <Prolist />
      </div>
    );
  }
});
