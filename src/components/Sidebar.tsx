import React from 'react'


const className = {
    sidebar_wrapper: "h-full w-[200px] border-r border-gray-300",
    sidebar: '',
}


interface sidebarProps {
    isOpen: boolean
}

const Sidebar: React.FC<sidebarProps> = ({ isOpen }) => {
    return (
        <div className={className.sidebar_wrapper}>
            <div className={className.sidebar}>
                hello world
            </div>
        </div>
    )
}

export default Sidebar