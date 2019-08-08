import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';


const config = {
  issuer: 'https://dev-545576.okta.com/oauth2/default',
redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oa12z6ft6JjzgoDA357'
}

class App extends Component {
  onAuthRequired=()=> {
  // history.push('/login')
  }
  render() {
  
       
     return (
         <div className="App">

<Router>
         
             <Security issuer={config.issuer}
                   client_id={config.client_id}
                   redirect_uri={config.redirect_uri}
                   onAuthRequired={this.onAuthRequired()}
         >
          
             <Route path='/' exact={true} component={Home} />
           <SecureRoute path='/profile' exact={true} component={Profile} />
           {/* <SecureRoute path='/protected' component={Protected} /> */}
           <Route path='/login' render={() => <Login baseUrl='https://dev-545576.okta.com' />} />
           <Route path='/implicit/callback' component={ImplicitCallback} />
        
        
         </Security>
          
         </Router>
           
         </div>
     )
   }
   }
   

export default App;
