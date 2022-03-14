import React from 'react'
import Table from '../components/Table'
import axios from 'axios'



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

    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/carts')

            const _orders: any = []

            await response.data.map(async (order: any) => {
                const { userId, date } = order
                await order.products.map(async (prod: any) => {
                    const product = await axios.get(`https://fakestoreapi.com/products/${prod.productId}`)

                    const a_order = {
                        id: order.id,
                        userId: userId,
                        date: date,
                        quantity: prod.quantity,
                        title: product.data.title,
                        price: product.data.price,
                        total: product.data.price * prod.quantity
                    }
                    _orders.push(a_order)
                })
            })

            setOrders(_orders)
        }
        getProducts()
    }, [])

    console.log(orders)

    return (
        <div className={className.wrapper}>
            <h3 className={className.heading}>Orders</h3>
            <div className={className.container}>
                {
                    orders.length > 0 && (
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