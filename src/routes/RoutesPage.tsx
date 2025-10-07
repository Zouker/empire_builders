import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Page } from '../page/Page'
import { Error404 } from '../common/error-page/Error404'
import { Portfolio } from '../portfolio/Portfolio'
import { ProjectsList } from '../portfolio/ProjectsList'

export const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Page />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
        <Route path={'/portfolio/:projectTitle'} element={<ProjectsList />} />
        <Route path={'/404'} element={<Error404 />} />
        <Route path={'*'} element={<Navigate to={'/404'} />} />
      </Routes>
    </>
  )
}
