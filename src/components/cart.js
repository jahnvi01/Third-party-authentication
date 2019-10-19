import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stat } from 'fs';
class cart extends Component {
    count=(event,i,id,price)=>{
        var count=event.target.value;
        var amount=price*count;
        this.props.subtotal(id,count,amount);
    }
    showcart=()=>{
    var index=-1;
      if(this.props.cartProducts.length!==0){
            
    return     this.props.cartProducts.map(product=>{
      index++;
            return(
              
     
     <div className="col-md-6 card-cont" key={product.id}> 
            <div className="card">
           
       
            <div className="card-img">
<img src={product.img} alt="product" width="250" height="200" />     
                            
            </div> 
        
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
         <p>Quantity: <input type="number" onChange={(event)=>this.count(event,index,product.id,product.price)} className="qty" defaultValue="1"/></p>
                  </div>
     
                </div>
            )
        
         })  
    }
    else{
return(
    <div className="col-md-12">
        <h3 id="empty">Nothing to show</h3>
    </div>
)
    }
}
    render() {  
      console.log(this.props.cartProducts);
       
        return (
            <div className="container">
                <div className="row">
                    
                {this.showcart()}
                </div>
                <div className="row">
     <div className="col-md-12">      
     
      <h3 style={{fontSize:"24px",fontWeight:"bold",textAlign:"center",padding:"2%"}}>
      Total: $ 
         {this.props.total}
        </h3> 
        </div>
                    </div>
                </div>
          );
    }
  }


  function mapStateToProps(state){
      console.log(state);
      var total=0;
      state.cartproduct.map(product=>{total=total+product.total})
    return {cartProducts:state.cartproduct,
            total:total
    }
    }
    function mapDispatchToStates(dispatch) {
  
        return {
   
subtotal:(id,count,amount)=>{
    var data={
        id:id,
        count:count,
        amount:amount
    }
    
            dispatch({type:"Subtotal",payload:data});
            
        }
      
        }
      }
      
  export default connect(mapStateToProps,mapDispatchToStates)(cart);