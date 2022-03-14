import React from 'react'
import Sidebar from './Sidebar'
import ContentRoute from './ContentRoute'
import TopNav from './TopNav'

const className = {
    layout: "m-0 p-0 h-full relative flex",
    content_layout: 'flex-1 flex flex-col bg-skin-second overflow-hidden',
}

const Layout: React.FC = () => {

    const [isOpen, setOpen] = React.useState(false)

    return (
        <div className={className.layout}>
            <Sidebar />

            <div className={className.content_layout}>
                <TopNav />

                {/* Contain data */}
                <div
                    className='flex-grow relative'>
                    <div className='absolute overflow-auto w-full h-full inset-0'>
                        <ContentRoute />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Layout