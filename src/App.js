import React from 'react';
import NavBar from './Header'
import Body from './Body'
//import {todoList,TodoItem} from './TodoItem';
import Footer from './Footer'
import './App.css';

function App() {
  //setInterval(Footer,1000);
  return (
    <div className="App">
        <NavBar/>
        <Body />
        <Footer/>
      
    </div>
      
  );
}
//setInterval(Footer,1000);
export default App;
