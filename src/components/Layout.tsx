import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './Sidebar'
import ContentRoute from './ContentRoute'
import TopNav from './TopNav'

const className = {
    layout: "m-0 p-0 h-full relative flex",
    content_layout: 'flex-1'
}

const Layout: React.FC = () => {

    const [isOpen, setOpen] = React.useState(false)

    return (
        <div className={className.layout}>
            {/* <Sidebar isOpen={isOpen} /> */}

            <div className={className.content_layout}>
                <TopNav />
                <ContentRoute />
            </div>
        </div>
    )
}

export default Layout