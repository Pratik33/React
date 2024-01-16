import { useContext, useReducer } from "react";

import ComponentA from './ComponentA';

import { GlobalReducerContext } from '../Context/GlobalReducerContext'

const initialState = 0;

const reducer = (state , action) =>{
    switch(action){
        case 'increment' : return state + 1 ;
        case 'decrement' : return state - 1 ;
        case 'reset' : return 0; 
        default : return state;
    }
}

const initialStateObject = { count : 0 } ;

const reducerFunObject = (state, action) => { 
    switch(action.type) { 
        case 'increment' : return {...state, count : state.count +  action.payload} ;
        case 'decrement' : return {...state, count : state.count -  action.payload};
        case 'incrementBy2' : return {...state, count : state.count +  action.payload} ;
        case 'decrementBy2' : return {...state, count : state.count -  action.payload};
        case 'reset' : return initialStateObject; 
        default : return {state};
    }
}

const UseReducerCounter = () => {
    const contextCount = useContext(GlobalReducerContext);
    const [count , dispatch ] = useReducer(reducer, initialState);
    const [ counter , dispatchAction ] = useReducer(reducerFunObject , initialStateObject)
    return ( 
    <div> 
        <section>
            <h1>Basic reducer code : </h1>
            <h2>count : {count}</h2>
            <button onClick={() => dispatch('increment')}> + </button>
            <button onClick={() => dispatch('decrement')}> - </button>
            <button onClick={() => dispatch('reset')}  > Reset </button>
        </section>
        <hr />
        <section>
            <h2> Counter Reducer with Object and action type </h2>
            <h2>count : {counter.count}</h2>
            <button onClick={() => dispatchAction( {type : 'increment' , payload : 1 } )}> + </button>
            <button onClick={() => dispatchAction( { type : 'decrement' , payload : 1 } )}> - </button>

            <button onClick={() => dispatchAction( {type : 'incrementBy2' , payload : 2 } )}> 2 + </button>
            <button onClick={() => dispatchAction( { type : 'decrementBy2', payload : 2 } )}> 2 - </button>

            <button onClick={() => dispatchAction( { type : 'reset' } )}  > Reset </button>
        </section>
        <hr />
        <section>
            <h2>Use reducer with context example </h2>
            <h3>{contextCount.appState.count}</h3>
            <ComponentA />
        </section>
    </div>)
    }
export default UseReducerCounter;