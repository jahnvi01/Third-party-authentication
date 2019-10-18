import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import Prolist from './prolist';
export default withAuth(class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { authenticated: null,userInfo:{} };
 
  // }
 
//   checkAuthentication = async () => {
//     const authenticated = await this.props.auth.isAuthenticated();
//     console.log(authenticated);

//     var accessToken=  await this.props.auth.getAccessToken();
//     let userinfo = await this.props.auth.getUser(accessToken);
//     if (authenticated !== this.state.authenticated) {
//       this.setState({ authenticated: authenticated,userInfo:userinfo });
//     }
//   }
//   async componentWillMount() {
//       // if (!this.state.authenticated )
//       // {return null;}
//     this.checkAuthentication();
 
//   }

//   async componentDidUpdate() {
//     this.checkAuthentication();
//     console.log("entering");
// console.log(this.state);
//   }

//   login = async () => {
//     this.props.auth.login('/');
//   }

//   logout = async () => {
//     this.props.auth.logout('/');
//   }
 
//  showbutton=()=>{
//    if(this.state.authenticated )
// {
//   return(
//     <button onClick={this.logout}>Logout</button> 
//   )
// }  
// else{
//   return(
//     <button onClick={this.login}>Login</button> 
//   )
// }

//  }
  render() {
  



    return (
      <div>
      
        {/* {button} */}
        <Prolist />
      </div>
    );
  }
});
