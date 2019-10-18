import { storeProducts } from '../data';
const initstate={
    storeProducts:storeProducts,
   cartproduct:[]
}


// ...state,
// arr: state.arr.push([action.newItem])

const rootreducer=(state=initstate,action)=>{
 
    console.log(state);
   switch(action.type){
case "Add":
   return {...state,cartproduct:[...state.cartproduct,action.payload]};

    case "Remove":
    const match=state.indexOf(action.payload)
  //  return state.filter((item,index)=>index!==match)
return state;
default:
    return state;
}
}
export default rootreducer;