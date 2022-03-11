import React from 'react'

import { Routes, Route as Route } from 'react-router-dom'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import Products from '../pages/Products'

const ContentRoute: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Customers />} />
            <Route path='/' element={<Products />} />
        </Routes>
    )
}

export default ContentRoute