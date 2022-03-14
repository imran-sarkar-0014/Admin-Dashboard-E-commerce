import React from 'react'


interface statusInterface {
    icon: String,
    count: String | Number,
    title: String,
}


const className = {
    container: 'status-card p-[30px] flex flex-col items-center bg-skin-main shadow-skin rounded-skin relative overflow-hidden ',
    icon: 'text-[3rem] text-skin-text',
    info: 'flex z-10 capitalize flex-col md:flex-row items-center text-skin-text',
    count: 'text-[1.5rem]',
}

const StatusCard: React.FC<statusInterface> = (props) => {
    return (
        <div className={className.container}>
            <div className="status-card__icon">
                <ion-icon class={className.icon} name={props.icon}></ion-icon>
            </div>
            <div className={className.info}>
                <h4 className={className.count}>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div >
    )
}

export default StatusCard