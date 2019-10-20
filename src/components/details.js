import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Details extends Component{

    render(){
        if(this.props.detailproduct.length===0){
this.props.history.push('/');
        }
        return(
     
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <h2 id="detail-title" className="title">{this.props.detailproduct.title}</h2>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                <img src={this.props.detailproduct.img} alt="product"/>                                     
                                </div>
                                <div className="col-md-7">
                                     <h4>Price: {this.props.detailproduct.price}</h4>
                                     <h4>Company: {this.props.detailproduct.company}</h4>
                                     <p>{this.props.detailproduct.info} </p>     
                                     <Link to="/" style={{color:"black"}}><button>Continue shopping</button></Link>
                                    <button id="cartBtn" onClick={(event)=>{this.props.addcart(this.props.detailproduct)}}>Add to cart</button>      
                                </div>
                            </div>
                        </div>
                 
                 );
              
                    
        
    }
}
function mapStateToProps(state){
    return {detailproduct:state.detailProduct}
    }
    
function mapDispatchToProps(dispatch){
return{
    addcart:(item)=>{

 item.count=1;
 item.total=item.price;

     dispatch({type:"Add",payload:item})
    },
 }
}
export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));