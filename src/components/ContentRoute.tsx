import React from 'react'

import { Routes, Route as Route } from 'react-router-dom'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))
const Customers = React.lazy(() => import('../pages/Customers'))
const Products = React.lazy(() => import('../pages/Products'))
const Orders = React.lazy(() => import('../pages/Orders'))
const Analytics = React.lazy(() => import('../pages/Analytics'))
const Settings = React.lazy(() => import('../pages/Setting'))

const Loading = () => {
    return (
        <div>
            Loading...
        </div>
    )
}

const ContentRoute: React.FC = () => {
    return (
        <React.Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/products' element={<Products />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/settings' element={<Settings />} />
            </Routes>
        </React.Suspense>
    )
}

export default ContentRoute