import React from 'react';
import NavBar from '../components/Header'
import Footer from '../components/Footer'
import Body from './Body'
//import {todoList,TodoItem} from './TodoItem';
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
