import { useContext } from "react";

import ComponentB from "./ComponentB";

import { GlobalReducerContext } from "../Context/GlobalReducerContext";


const ComponentA = () => {
    const contextCount = useContext(GlobalReducerContext); 
    return (
         <><h2>Component A</h2> 
         <div>
            <button onClick={() => { contextCount.dispatch({type:'increment' , payload: 1})} }> + </button>
            <button onClick={() => { contextCount.dispatch({type:'decrement' , payload: 1})} } > - </button>
            <button onClick={() => { contextCount.dispatch({type:'reset' , payload: 1})} } > Reset </button>
        </div>
         <ComponentB /></>
    )
}

export default ComponentA;