import React from 'react'



const clickOutsideRef = (content_ref: any, toggle_ref: any) => {

    console.log(content_ref.current)

    document.addEventListener('mousedown', (e) => {
        // user click toggle
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active')
        } else {
            // user click outside toggle and content
            if (content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}


const className = {
    dropdown: 'relative z-[100]',
    toggleButton: 'border-none outline-none bg-transparent relative',
    icon: 'text-[2rem] text-skin-text',
    badge: `flex items-center justify-center absolute -top-[12px] -right-[10px] w-[25px]
            rounded-full bg-skin-main text-skin-white text-[0.8rem]`,
    content: `absolute top-[calc(100%+5px)] right-0 w-max max-w-[400px] bg-skin-main shadow-skin rounded-skin
            overflow-hidden transform scale-0 origin-top-right duration-300 ease-in-out`,
    footer: 'p-[20px] text-center',

}


interface dropdownInterface {
    icon?: String,
    badge?: String,
    customToggle?: () => void,
    contentData?: Object[],
    renderItems: (item: any, index: any) => JSX.Element
    renderFooter?: () => JSX.Element

}

const Dropdown: React.FC<dropdownInterface> = (props) => {

    const dropdown_toggle_el = React.useRef(null)
    const dropdown_content_el = React.useRef(null)

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el)

    return (
        <div className={className.dropdown}>

            <button ref={dropdown_toggle_el} className={className.toggleButton}>
                {
                    props.icon && <ion-icon class={className.icon} name={props.icon}></ion-icon>
                }
                {
                    props.badge && <span className={className.badge}></span>
                }
                {
                    props.customToggle && props.customToggle()
                }
            </button>

            <div ref={dropdown_content_el} className={className.content}>
                {
                    (props.contentData && props.renderItems) &&
                    props.contentData.map((item, index) => props.renderItems(item, index))
                }
                {
                    props.renderFooter ? (
                        <div className={className.footer}>
                            {
                                props.renderFooter()
                            }
                        </div>
                    ) : ''
                }
            </div>

        </div>
    )
}

export default Dropdown