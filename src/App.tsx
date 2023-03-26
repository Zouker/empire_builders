import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
