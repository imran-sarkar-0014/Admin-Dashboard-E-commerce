import React from 'react'

import Table from '../components/Table'
import customers_data from '../assets/JsonData/customers-list.json'

const customers_columns = ['id', 'name', 'email', 'phone', 'location', 'total order', 'total spent']


const className = {
    wrapper: 'w-full h-full relative inset-0',
    heading: 'text-3xl text-skin-main p-8',
    container: 'absolute pb-[10rem] h-full p-1 w-full',
    thead: 'whitespace-nowrap py-4 px-3 text-skin-text uppercase',
    trow: 'border-t',
    tdata: 'whitespace-nowrap py-3 px-3 text-skin-text'
}

const renderHeader = (item: String, index: React.Key) => (
    <th className={className.thead} key={index}>{item}</th>
)


const renderCustomer = (item: any, index: any) => (
    <tr className={className.trow} key={index}>
        <td className={className.tdata}>{item.id}</td>
        <td className={className.tdata}>{item.name}</td>
        <td className={className.tdata}>{item.email}</td>
        <td className={className.tdata}>{item.phone}</td>
        <td className={className.tdata}>{item.location}</td>
        <td className={className.tdata}>{item.total_orders}</td>
        <td className={className.tdata}>{item.total_spend}</td>
    </tr>
)

const Customers = () => {
    return (
        <div className={className.wrapper}>
            <h3 className={className.heading}>Customers</h3>
            <div className={className.container}>
                {
                    <Table
                        headData={customers_columns}
                        renderHead={(item: any, index: any) => renderHeader(item, index)}
                        bodyData={customers_data}
                        renderBody={renderCustomer}
                        limit={20}
                    />
                }
            </div>
        </div >
    )
}

export default Customers