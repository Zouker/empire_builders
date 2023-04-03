import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Town from "../portfolio/project/town/Town";
import Home from "../home/Home";
import Error404 from "../common/error-page/Error404";

const RoutesPage = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/town'} element={<Town/>}/>
                <Route path={'/404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};

export default RoutesPage;