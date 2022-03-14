import React from 'react'
import Table from '../components/Table'


const className = {
    wrapper: 'w-full h-full relative inset-0',
    heading: 'text-3xl text-skin-main p-8',
    container: 'absolute pb-[10rem] h-full p-1 w-full',
    thead: 'whitespace-nowrap py-4 px-3 text-skin-text uppercase',
    trow: 'border-t',
    tdata: 'whitespace-nowrap py-3 px-3 text-skin-text'
}

const headData = ['id', 'user id', 'title', 'price', 'quantity', 'total price']

const renderHead = (item: String, index: any) => (
    <th className={className.thead} key={index}>{item}</th>
)


// products id and quantity

const renderBody = (item: any, index: any) => (
    <tr className={className.trow} key={index}>
        <td className={className.tdata}>{item.id}</td>
        <td className={className.tdata}>{item.userId}</td>
        <td className={className.tdata}>{item.title}</td>
        <td className={className.tdata}>${item.price}</td>
        <td className={className.tdata}>{item.quantity}</td>
        <td className={className.tdata}>${item.total}</td>
    </tr>
)


const Orders = () => {



    React.useEffect(() => {
    }, [])



    return (
        <div className={className.wrapper}>

            <h3 className={className.heading}>Orders</h3>
            <div className={className.container}>
                {

                    (
                        <Table
                            headData={headData}
                            renderHead={(item: any, index: any) => renderHead(item, index)}
                            bodyData={orders}
                            renderBody={(item: any, index: any) => renderBody(item, index)}
                            limit={10}
                        />)
                }
            </div>

        </div>
    )
}


export default Orders


const orders = [
    {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:02.000Z",
        "quantity": 4,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "total": 439.8
    },
    {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:02.000Z",
        "quantity": 1,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "total": 22.3
    },
    {
        "id": 1,
        "userId": 1,
        "date": "2020-03-02T00:00:02.000Z",
        "quantity": 6,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "total": 335.94
    },
    {
        "id": 2,
        "userId": 1,
        "date": "2020-01-02T00:00:02.000Z",
        "quantity": 2,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "total": 1390
    },
    {
        "id": 5,
        "userId": 3,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 1,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 10.99,
        "total": 10.99
    },
    {
        "id": 5,
        "userId": 3,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 1,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "total": 9.99
    },
    {
        "id": 3,
        "userId": 2,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 1,
        "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        "price": 64,
        "total": 64
    },
    {
        "id": 6,
        "userId": 4,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 2,
        "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        "price": 109,
        "total": 218
    },
    {
        "id": 6,
        "userId": 4,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 3,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 114,
        "total": 342
    },
    {
        "id": 6,
        "userId": 8,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 1,
        "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "price": 9.85,
        "total": 9.85
    },
    {
        "id": 2,
        "userId": 1,
        "date": "2020-01-02T00:00:02.000Z",
        "quantity": 10,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "total": 1099.5
    },
    {
        "id": 2,
        "userId": 1,
        "date": "2020-01-02T00:00:02.000Z",
        "quantity": 4,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "total": 89.2
    },
    {
        "id": 3,
        "userId": 2,
        "date": "2020-03-01T00:00:02.000Z",
        "quantity": 2,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "total": 219.9
    },
    {
        "id": 4,
        "userId": 3,
        "date": "2020-01-01T00:00:02.000Z",
        "quantity": 4,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "total": 439.8
    }
]