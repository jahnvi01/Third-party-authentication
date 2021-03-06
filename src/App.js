import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from './components/login';
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/cart';
import Profile from './components/profile';
import './App.css';
import cart from './components/cart';
import Details from './components/details';
const config = {
  issuer: 'https://dev-630882.okta.com/oauth2/default',
redirect_uri: window.location.origin + '/implicit/callback',
  client_id: '0oa1lw2h72y4O5wPG357'
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
          <Navbar />
             <Route path='/' exact={true} component={Home} />
           <SecureRoute path='/profile' exact={true} component={Profile} />
           {/* <SecureRoute path='/protected' component={Protected} /> */}
           <Route path='/login' render={() => <Login baseUrl='https://dev-630882.okta.com' />} />
           <Route path='/implicit/callback' component={ImplicitCallback} />
           <SecureRoute path='/details' exact={true} component={Details} />
           <SecureRoute path='/cart' exact={true} component={cart} />
         </Security>
          
         </Router>
           
         </div>
     )
   }
   }
   

export default App;
