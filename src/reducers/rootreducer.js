import { storeProducts } from '../data';
import product from '../components/product';
const initstate={
    storeProducts:storeProducts,
   cartproduct:[],
   detailProduct:[]
}


// ...state,
// arr: state.arr.push([action.newItem])

const rootreducer=(state=initstate,action)=>{
 var repeat=0;
    console.log(state);
   switch(action.type){
case "Add":
  state.cartproduct.map(product=>{
    if(product.id===action.payload.id){
repeat=1;
    }
  })
  if(repeat===0){
  return {...state,cartproduct:[...state.cartproduct,action.payload]
  
  };

 }else{ 
  return state;}
  
    case "Remove":
   
    return {...state,cartproduct:state.cartproduct.filter(product=>product.id!==action.payload)};

case "Subtotal": 
return {...state,cartproduct:state.cartproduct.map(product=>
  product.id===action.payload.id ?

{ ...product, id: action.payload.id,count:action.payload.count,total:action.payload.amount } : 

product
  
  
)}
case "details":return {...state,detailProduct:action.payload}
default:
    return state;
}
}
export default rootreducer;