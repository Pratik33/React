import { useContext } from "react";
import { GlobalReducerContext } from "../Context/GlobalReducerContext";

const ComponentC = () => {

    const contextCount = useContext(GlobalReducerContext); 

    return (
    <div >
        <h2>Component C </h2>
        <div>
            <button onClick={() => { contextCount.dispatch({type:'increment' , payload: 1})} }> + </button>
            <button onClick={() => { contextCount.dispatch({type:'decrement' , payload: 1})} } > - </button>
            <button onClick={() => { contextCount.dispatch({type:'reset' , payload: 1})} } > Reset </button>
        </div>
    </div>)
}

export default ComponentC;