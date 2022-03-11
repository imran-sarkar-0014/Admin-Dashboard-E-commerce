import React from 'react'
import { useDispatch } from 'react-redux'
import ThemeAction from '../redux/actions/ThemeAction'

import mode_settings from '../assets/JsonData/mode_settings.json'
import color_settings from '../assets/JsonData/color-setting.json'

const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active-theme')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active-theme')
            }
        }
    })
}

const className = {
    toggle: '',
    menu_container: `fixed top-0 w-[300px] h-[100vh] p-[20px] z-[100] bg-skin-main shadow-skin 
    transform transition origin-bottom-left duration-700 scale-0  ease-in-cubic`,
    menu_close: 'absolute top-[17px] right-[20px] bg-transparent text-[1.5rem]',
    close_icon: 'text-[1.5rem]',
    menu_select: 'mt-[40px]',
    mode_list: 'mt-[20px]',
    list_item: 'flex items-center cursor-pointer mt-[20px]',
    mode_list__color: 'w-[30px] h-[30px] rounded-full flex items-center justify-center mr-[10px] text-[1.5rem]',
    checkIcon: 'transform scale-0',
}


const ThemeMenu = () => {

    const menuRef = React.useRef<null | any>(null)
    const menuToggleRef = React.useRef<null | any>(null)

    clickOutsideRef(menuRef, menuToggleRef)

    const setActiveMenu = () => {

        menuRef.current && menuRef.current.classList.add('active-theme')
    }
    const closeMenu = () => {

        menuRef.current && menuRef.current.classList.remove('active-theme')
    }


    const [currMode, setcurrMode] = React.useState('light')

    const [currColor, setcurrColor] = React.useState('blue')

    const dispatch = useDispatch()

    const setMode = (mode: any) => {
        setcurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))
    }

    const setColor = (color: any) => {
        setcurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))
    }

    React.useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode'))

        const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)

        if (colorClass !== undefined) setcurrColor(colorClass.id)
    }, [])


    return (
        <div>

            <button ref={menuToggleRef} className={className.toggle} onClick={() => setActiveMenu()} >
                <ion-icon class='text-[2rem]' name="color-palette-outline"></ion-icon>
            </button>

            <div ref={menuRef} className={className.menu_container + 'right-0'}>
                <h4>Theme Settings</h4>
                <button className={className.menu_close} onClick={() => closeMenu()}>
                    <ion-icon class={className.close_icon} name="close-outline"></ion-icon>
                </button>


                {/* Theme Select */}
                <div className={className.menu_select}>
                    <span>Choose mode</span>
                    <ul className={className.mode_list}>
                        {
                            mode_settings.map((item, index) => (
                                <li className={className.list_item} key={index} onClick={() => setMode(item)}>
                                    <div className={` ${className.mode_list__color} ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <ion-icon
                                            className={className.checkIcon} name="checkmark-outline"></ion-icon>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                {/* Color menu Select */}
                <div className="theme-menu__select">
                    <span>Choose color</span>
                    <ul className="mode-list">
                        {
                            color_settings.map((item, index) => (
                                <li className={className.list_item} key={index} onClick={() => setColor(item)}>
                                    <div className={`${className.mode_list__color} ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <ion-icon className={className.checkIcon} name="checkmark-outline"></ion-icon>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>


            </div>

        </div >
    )
}

export default ThemeMenu