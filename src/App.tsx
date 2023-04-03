import React from 'react';
import './App.scss';
import Header from "./header/Header";
import {Footer} from "./footer/Footer";
import RoutesPage from "./routes/RoutesPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <RoutesPage/>
            <Footer/>
        </div>
    );
}

export default App;
