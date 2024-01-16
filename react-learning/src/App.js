import './App.css';
import { useReducer, useState } from 'react';

import NavBar from './Components/Navbar';
import UserConsumerA from './Components/UserConsumerA';
import { ChannelContextProvider } from './Context/ChannelContext';
import { UserProvider } from './Context/UserContext'
import UseReducer from './Components/UseReducerCounter'


import Formik from './Components/Formik/Formik';

import { GlobalReducerContextProvider } from './Context/GlobalReducerContext';

const initialState = { count : 0 }

const reducer = (state , {payload , type}) => {

    switch(type){
      case 'increment' : {
        return {...state, count: state.count + payload }
      }
      case 'decrement' : {  
        return {...state, count: state.count - payload }
      }

      case 'reset' : return initialState;
      
      default : return state
    }
}


function App() {

  const [ appState , dispatch ] = useReducer(reducer, initialState)

  const [theme , setTheme ] = useState(false);

  let selectedTheme = theme ? 'dark' : 'light';

  return (
    <GlobalReducerContextProvider value = {{appState : appState , dispatch : dispatch}}>
      <div className="App">
        {/* <h2>App State count : {appState.count}</h2> */}
        {/* <UseStateHook /> */}
        {/* <DataFetching /> */}
      
        {/* <NavBar themeHandler = {setTheme} theme = {theme}/>
        <h1>{selectedTheme}</h1>
        <UserProvider value={'Pratik s'}>
          <ChannelContextProvider value={'codeevolution is the best channel !'} >        
            <UserConsumerA />
          </ChannelContextProvider>

        </UserProvider> */}

        {/* <UseReducer /> */}
        <Formik />
      </div>
    </GlobalReducerContextProvider>
  );
}

export default App;
