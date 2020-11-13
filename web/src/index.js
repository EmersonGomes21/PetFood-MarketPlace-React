import React from 'react';
import ReactDOM from 'react-dom';
import PagesRoot from './pages/Root';
import  './styles/global.css';
// import SideBar from './components/SIderBar';

ReactDOM.render(
  <React.StrictMode>
   <PagesRoot />
  </React.StrictMode>,
  document.getElementById('root') 
);

