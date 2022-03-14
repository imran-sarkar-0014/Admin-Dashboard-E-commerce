import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import ThemeMenu from './ThemeMenu'
import navAction from '../redux/actions/navAction'


import user_menu from '../assets/JsonData/user_menus.json'
import notifications from '../assets/JsonData/notification.json'
import { useDispatch } from 'react-redux'

const height = '110px'

const curr_user = {
    display_name: 'Adam Smith',
    image: '/images/profile.jpg'
}



const className = {
    topnav: "oveflow-hidden w-full py-[20px] px-[15px] flex items-center justify-between bg-skin-main ",
    search: "relative px-2 h-[50px] flex items-center shadow-skin rounded-skin text-skin-text bg-skin-main",
    input: 'outline-none h-full w-full py-[10px] pr-[30px] pl-[10px] text-[1rem] rounded-skin text-skin-text bg-skin-main',
    icon: 'text-[1.5rem] absolute right-[10px]',
    right: 'flex items-center',
    right_item: 'ml-[12px]',


    navToggler: 'text-skin-text text-[3rem] md:hidden cursor-pointer transform duration-300 hover:scale-75 transition-transform',

    // profile
    profile: 'flex items-center flex-col md:flex-row',
    avatar: 'nav-avatar',
    img: 'w-full object-cover',
    name: 'text-[0.75rem] md:text-[1.2rem] font-semibold whitespace-nowrap text-skin-text',

    // notifictions
    notification_item: 'flex max-w-xs md:max-w-max items-center px-[10px] md:px-[20px] py-[20px] bg-skin-main text-skin-text hover:bg-skin-second',
    notify_icon: 'mr-[20px] text-[1.5rem]',
    notification_footer: 'text-skin-text',
}



const renderNotificationItem = (item: any, index: any) => (
    <div className={className.notification_item} key={index}>
        <ion-icon class={className.notify_icon} name={item.icon}></ion-icon>
        <span>{item.content}</span>
    </div>
)


const renderUserToggle = (user: any) => (
    <div className={className.profile}>
        <div className={className.avatar}>
            <img className={className.img} src={user.image} alt="" />
        </div>
        <div className={className.name}>
            {user.display_name}
        </div>
    </div>
)


const renderUserMenu = (item: any, index: any) => (
    <Link to='/' key={index}>
        <div className={className.notification_item}>
            <ion-icon class={className.notify_icon} name={item.icon}></ion-icon>
            <span>{item.content}</span>
        </div>
    </Link>
)


const TopNav = () => {

    const dispatch = useDispatch()

    const onNavToggle = () => {

        dispatch(navAction.toggleNav())
    }

    return (
        <div className={className.topnav + `${height}`}>

            <ion-icon onClick={onNavToggle} class={className.navToggler} name="reorder-four-outline"></ion-icon>
            {/* Search */}
            <div className={className.search}>
                <input className={className.input} type="text" placeholder='Search here...' />
                <ion-icon class={className.icon} name="search-outline"></ion-icon>
            </div>

            {/* Right side */}

            <div className={className.right}>

                {/* Profile */}
                <div className={className.right_item}>
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>

                {/* Notifications */}
                <div className={className.right_item}>
                    <Dropdown
                        icon='notifications-outline'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item: any, index: any) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link className={className.notification_footer} to='/'>View All</Link>}
                    />
                </div>

                {/* Theme */}
                <div className={className.right_item}>
                    <ThemeMenu />
                </div>

            </div>


        </div >
    )
}

export default TopNav