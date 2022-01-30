import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      return (
         <div className="App">
          <Header/>
          <Main/>
          <Footer/>
         </div>
      );
   }



 function Header() {
      return (
         <div className="App-header">
                   <img src={logo} className="App-logo" alt="logo" />
        <h2>
         Vasilis Tzimplakis
        </h2>
         </div>
      );
   }



   function Main() {
      return (
         <div className="App-main">
            <h1>this is the main funtion component!!!!!!!</h1>
         </div>
      );
   }


   function Footer() {
      return (
         <div className="App-footer">
            <h1>this is the footer funtion component!!!!!!!</h1>
         </div>
      );
   }






export default App;