import React, { Component } from 'react';
import { connect } from 'react-redux';


class prolist extends Component {

    render() { 
        
       const { id,title,img,price }=this.props.product;
     
        return (
          
                <div className="col-md-4 card-cont"> 
            <div className="card" key={id}>
           
       
            <div className="card-img">
<img src={img} alt="product" width="250" height="200" />     
                            
            </div> 
        
            <p>{title}</p>
            <p>{price}</p>
           <button onClick={()=>this.props.addcart(this.props.product)}> add to cart </button>
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
 // const i=pros.push(item);
     dispatch({type:"Add",payload:item})
    },
    remove:(item)=>{
      
      // dispatch({type:"Remove",payload:item})
    }
}
}
  export default connect(mapStateToProps,mapDispatchToProps)(prolist);