import React, { Component } from 'react';
import { connect } from 'react-redux';

import Product from './product';
class prolist extends Component {
    render() {  
        const item=this.props.products.map( product=>{   return <Product key={product.id} product={product}/>;});
         
        return (
            <div className="row">
            
                {item}
                </div>
          );
    }
  }

function mapStateToProps(state){
return {products:state.storeProducts}
}

  export default connect(mapStateToProps)(prolist);