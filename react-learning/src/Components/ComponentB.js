import { useContext } from "react";

import ComponentC from "./ComponentC";

import { GlobalReducerContext } from "../Context/GlobalReducerContext";

const ComponentB = () => {
    const contextCount = useContext(GlobalReducerContext); 
    return (
        <><h2>Component B</h2> 
         <div>
            <button onClick={() => { contextCount.dispatch({type:'increment' , payload: 1})} }> + </button>
            <button onClick={() => { contextCount.dispatch({type:'decrement' , payload: 1})} } > - </button>
            <button onClick={() => { contextCount.dispatch({type:'reset' , payload: 1})} } > Reset </button>
        </div>
        <ComponentC /></>
   )
}

export default ComponentB;