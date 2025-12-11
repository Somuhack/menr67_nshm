import React from "react";
import { useReducer } from "react";

function Myreducer(state, action) {
  switch (action.type) {
    case "Add":
      return (state += 1);
    case "remove":
      return (state -= 1);
    case "byvalue":
        return state+=action.payload
    default:
      return state;
  }
}

const UseReducer = () => {
  const [data, dispatch] = useReducer(Myreducer, 10);
  return (
    <>
      <div>UseReducer :{data}</div>
      <button onClick={()=>dispatch({type:"Add"})}>Add</button>
      <button onClick={()=>dispatch({type:"remove"})}>remove</button>
      <button onClick={()=>dispatch({type:"byvalue",payload:10})}>Inc by value</button>
    </>
  );
};

export default UseReducer;
