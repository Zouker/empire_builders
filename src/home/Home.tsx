import React from 'react';
import Main from "../main/Main";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contacts from "../contacts/Contacts";

const Home = () => {
    return (
        <div>
            <Main/>
            <About/>
            <Portfolio/>
            <Contacts/>
        </div>
    );
};

export default Home;