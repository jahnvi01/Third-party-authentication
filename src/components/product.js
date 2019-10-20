import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Popconfirm, Switch, message } from 'antd';
import { withRouter } from "react-router";
class prolist extends Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show popconfirm.
  };
addcart=(product)=>{
  this.props.addcart(product)
}
details=(product)=>{
this.props.details(product);
this.props.history.push('/details');
}
changeCondition = value => {
  this.setState({ condition: value });
};

confirm = () => {
  this.setState({ visible: false });
  message.success('Added to cart');
};

cancel = () => {
  this.setState({ visible: false });
  message.error('Click on cancel.');
};

handleVisibleChange = visible => {
  if (!visible) {
    this.setState({ visible });
    return;
  }
  // Determining condition before show the popconfirm.
  console.log(this.state.condition);
  if (this.state.condition) {
    this.confirm(); // next step
  } else {
    this.setState({ visible }); // show the popconfirm
  }
};
    render() { 
        
       const { id,title,img,price }=this.props.product;
     
        return (
          
                <div className="col-md-4 card-cont"> 
            <div className="card" key={id}>
           
      
            <div className="card-img" onClick={()=>{this.details(this.props.product)}}>
<img src={img} alt="product" width="250" height="200" />     
                            
            </div> 
        
            <p>{title}</p>
            <p>{price}</p>
            <Popconfirm
          title="Added to cart"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
      <button onClick={()=>this.addcart(this.props.product)}> add to cart </button>
        </Popconfirm>
         
            </div>

            </div>
          
        
                
           
          );
    }
  }

  function mapStateToProps(state){
    return {cartpro:state.cartproduct}
    }
    
function mapDispatchToProps(dispatch){
return{
    addcart:(item)=>{

 item.count=1;
 item.total=item.price;

     dispatch({type:"Add",payload:item})
    },
    details:(product)=>{
      
       dispatch({type:"details",payload:product})
    }
}
}
  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(prolist));