import React from 'react';
import Name from './comp1/Name';
import Address from './comp1/Address';
import Phone from './comp1/Phone';
import logo from './logo.svg';
import './App.css';

function App() {
      return (
         <div className="App">
          <Name onoma="Βασίλης" epitheto="Τζιμπλάκης"/>
          <Address street="Βουλιαγμένης" number="1" city="Ανθούπολη"/>
          <Phone countrycode="30" number="123456"/>
		    <Phone countrycode="30" number="123456"/>
         </div>
      );
   }



export default App;
