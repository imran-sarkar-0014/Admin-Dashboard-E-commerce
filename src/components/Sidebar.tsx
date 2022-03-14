import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import navAction from '../redux/actions/navAction'

import sidebar_items from '../assets/JsonData/sidebar_routes.json'
import { Link, useLocation } from 'react-router-dom'


const className = {
    sidebar_wrapper: `absolute md:static md:block z-[200] bg-skin-main text-skin-text h-full md:w-[200px]
                    transition-all duration-500`,
    sidebar: 'relative h-full w- overflow-hidden',

    cancel_icon: 'md:hidden text-[2.4rem] rounded-lg shadow-skin cursor-pointer text-skin-text absolute top-1 right-1',

    container: 'w-full',
    brandName: 'w-full uppercase font-medium text-2xl text-center py-12',

    sidebar__item: 'border-l-2 border-skin-second p-2 hover:bg-skin-second',
    sidebar__item_inner: 'flex items-center',
    icon: 'text-[2rem] py-2 mr-4 text-skin-main',
    item_name: 'text-lg',
    active: 'border-skin-main bg-skin-second'
}




const SidebarItem = (props: any) => {


    const active = props.active ? className.active : ''

    return (
        <div className={`${className.sidebar__item} ${active}`}>
            <div className={`${className.sidebar__item_inner}`}>
                <ion-icon class={className.icon} name={props.icon}></ion-icon>
                <span className={className.item_name}>
                    {props.title}
                </span>
            </div>
        </div>
    )
}


const Sidebar: React.FC = () => {

    const navReducer: any = useSelector<any>(state => state.navReducer)
    const dispatch = useDispatch()
    const location = useLocation()

    const isOpen = navReducer.isOpen ? 'w-[200px] ' : 'w-none '

    const onToggleHandler = () => {
        dispatch(navAction.toggleNav())
    }

    const onNavigate = () => {
        onToggleHandler()
    }

    return (
        <div className={isOpen + className.sidebar_wrapper}>
            <div className={className.sidebar}>
                <ion-icon onClick={onToggleHandler} class={className.cancel_icon} name="close-outline"></ion-icon>

                <div className=''>
                    <h2 className={className.brandName}>E-commerce</h2>
                </div>

                <div>
                    {
                        sidebar_items.map((item, index) => (
                            <Link to={item.route} onClick={onNavigate} key={index} >
                                <SidebarItem
                                    title={item.display_name}
                                    icon={item.icon}
                                    active={item.route === location.pathname}
                                />
                            </Link>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Sidebar