import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Page from "../page/Page";
import Error404 from "../common/error-page/Error404";
import Town from "../portfolio/project/town/Town";
import Sconset from '../portfolio/project/sconset/Sconset';
import Portfolio from '../portfolio/Portfolio';

const RoutesPage = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Page/>}/>
                <Route path={'/portfolio'} element={<Portfolio/>}/>
                <Route path={'/portfolio/town'} element={<Town/>}/>
                <Route path={'/portfolio/sconset'} element={<Sconset/>}/>
                <Route path={'/404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
        </>
    );
};

export default RoutesPage;