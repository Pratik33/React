
import './App.css';

import { useState } from 'react';
import NavBar from './Components/Navbar';

import UserConsumerA from './Components/UserConsumerA';



import { ChannelContextProvider } from './Context/ChannelContext';
import { UserProvider } from './Context/UserContext'

function App() {
  const [theme , setTheme ] = useState(false);

  let selectedTheme = theme ? 'dark' : 'light';

  return (
    <div className="App">
      {/* <UseStateHook /> */}
      {/* <DataFetching /> */}
    
      <NavBar themeHandler = {setTheme} theme = {theme}/>
       <h1>{selectedTheme}</h1>
      <UserProvider value={'Pratik s'}>
        <ChannelContextProvider value={'codeevolution is the best channel !'} >        
          <UserConsumerA />
        </ChannelContextProvider>

      </UserProvider>

    </div>
  );
}

export default App;
