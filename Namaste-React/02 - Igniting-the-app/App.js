import  React  from 'react';
import  ReactDOM  from 'react-dom/client';

const h1 = React.createElement('h1', {id:'heading'} , 'Hi, this is from React CDN !' )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h1);