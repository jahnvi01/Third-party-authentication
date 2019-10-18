import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Avatar from '../images/profile.png';

export default withAuth(class Profile extends Component {
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

  render() {

    return (
      <div>
          {this.showInfo()}
      </div>
    );
  }
});
