import React from 'react'
import { useSelector } from 'react-redux'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import StatusCard from '../components/StatusCard'
import Table from '../components/Table'

import status_cart from '../assets/JsonData/status-card-data.json'


const className = {
    pageName: 'text-4xl my-8 mx-4 text-skin-text',
    container: 'h-full w-full overflow-y-auto',
    grid: 'grid md:grid-cols-2 ',
    grid_item: '',
    card_container: 'grid grid-cols-2',
    chart: 'shadow-skin bg-skin-main rounded-skin h-[96%] m-1 min-h-[14rem]',

    tb_name: 'text-xl p-2 text-skin-text',
    tb_container: 'm-2 p-2 bg-skin-main overflow-auto shadow-skin rounded-skin',
    thead: 'px-5 py-4 scale-105 text-skin-text',
    tdata: 'text-left pl-4 py-2 text-skin-text',
    tlink: 'text-sm ml-8 font-light text-blue-600'
}


const renderCusomerHead = (item: any, index: any) => (
    <th className={className.thead} key={index}>{item}</th>
)

const renderCusomerBody = (item: any, index: any) => (
    <tr className='border-t m-1' key={index}>
        <td className={className.tdata}>{item.username}</td>
        <td className={className.tdata}>{item.order}</td>
        <td className={className.tdata}>{item.price}</td>
    </tr>
)


const renderOrderHead = (item: any, index: any) => (
    <th className={className.thead} key={index}>{item}</th>
)


const renderOrderBody = (item: any, index: any) => (
    <tr className='border-t m-1'>
        <td className={className.tdata}>{item.id}</td>
        <td className={className.tdata}>{item.user}</td>
        <td className={className.tdata}>{item.price}</td>
        <td className={className.tdata}>{item.date}</td>
        <td className={className.tdata}>{item.status}</td>
    </tr>
)

const Dashboard = () => {


    const themeReducer: any = useSelector<any>(state => state.ThemeReducer)


    const mode = themeReducer.mode === 'theme-mode-light' ? 'light' : 'dark'
    const options = chartOptions.options

    return (
        <div className={className.container}>
            <h3 className={className.pageName}>Dashboard</h3>

            <div className={className.grid}>


                <div className={className.chart} >
                    <Chart
                        options={{
                            colors: options.colors,
                            chart: {
                                background: 'transparent'
                            },
                            dataLabels: options.dataLabels,
                            stroke: {
                                curve: 'smooth'
                            },
                            xaxis: options.xaxis,
                            grid: options.grid,
                            theme: { mode }
                        }}
                        series={chartOptions.series}
                        type='line'
                        height='100%'
                    />
                </div>

                <div className={className.card_container}>
                    {
                        status_cart.map((item, index) => (
                            <div>
                                <StatusCard
                                    icon={item.icon}
                                    count={item.count}
                                    title={item.title}
                                />
                            </div>
                        ))
                    }
                </div>


            </div>


            <div>
                <div className='w-full my-5'>
                    <div className="">
                        <h3 className={className.tb_name}>top customers</h3>
                    </div>
                    <div className={className.tb_container}>
                        <Table
                            headData={topCustomers.head}
                            renderHead={(item: any, index: any) => renderCusomerHead(item, index)}
                            bodyData={topCustomers.body}
                            renderBody={(item: any, index: any) => renderCusomerBody(item, index)}
                        />
                    </div>
                    <div className={className.tlink}>
                        <Link to='/customers'>view all</Link>
                    </div>
                </div>
                <div className='w-full my-5'>
                    <div className="">
                        <h3 className={className.tb_name}>top customers</h3>
                    </div>
                    <div className={className.tb_container}>
                        <Table
                            headData={latestOrders.header}
                            renderHead={(item: any, index: any) => renderOrderHead(item, index)}
                            bodyData={latestOrders.body}
                            renderBody={(item: any, index: any) => renderOrderBody(item, index)}
                        />
                    </div>
                    <div className={className.tlink}>
                        <Link to='/orders'>view all</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Dashboard

















const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 36, 80, 30, 91, 60, 70, 20, 90,]
    }, {
        name: 'Store Customers',
        data: [46, 31, 40, 90, 70, 69, 46, 70, 31, 49]
    }],
    options: {
        colors: ['#1a6e77', '#0a9621'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: "top"
        },
        grid: {
            show: false
        }
    }
}



const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}


const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}