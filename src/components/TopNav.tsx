import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import ThemeMenu from './ThemeMenu'
import user_menu from '../assets/JsonData/user_menus.json'
import notifications from '../assets/JsonData/notification.json'

const height = '110px'

const curr_user = {
    display_name: 'Tuat Tran',
    image: '/images/tuat.png'
}



const className = {
    topnav: "p-[30px] flex items-center justify-between bg-skin-main ",
    search: "relative px-4 h-[50px] flex items-center shadow-skin rounded-skin text-skin-text bg-skin-main",
    input: 'outline-none h-full w-full py-[10px] pr-[60px] pl-[20px] text-[1rem] rounded-skin text-skin-text bg-skin-main',
    icon: 'text-[1.5rem] absolute right-[20px]',
    right: 'flex items-center',
    right_item: 'ml-[30px]',


    // profile
    profile: 'flex items-center',
    avatar: 'w-[40px] h-[40px] rounded-full overflow-hidden mr-[10px]',
    img: 'w-full object-cover',
    name: 'text-[1rem] font-semibold',

    // notifictions
    notification_item: 'flex items-center p-[20px] hover:bg-skin-second',
    notify_icon: 'mr-[20px] text-[1.5rem]'


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
    return (
        <div className={className.topnav + `${height}`}>

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
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>

                {/* Theme */}
                <div className={className.right_item}>
                    <ThemeMenu />
                </div>

            </div>


        </div>
    )
}

export default TopNav