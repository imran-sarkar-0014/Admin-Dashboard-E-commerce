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

const headData = ['id', 'title', 'price', 'rate', 'rate count']

const renderHead = (item: String, index: any) => (
    <th className={className.thead} key={index}>{item}</th>
)

const renderBody = (item: any, index: any) => (
    <tr className={className.trow}>
        <td className={className.tdata}>{item.id}</td>
        <td className={className.tdata}>{item.title}</td>
        <td className={className.tdata}>${item.price}</td>
        <td className={className.tdata}>{item.rating.rate}</td>
        <td className={className.tdata}>{item.rating.count}</td>
    </tr>
)


const Products = () => {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
        }
        getProducts()
    }, [])

    return (
        <div className={className.wrapper}>
            <h3 className={className.heading}>Customers</h3>
            <div className={className.container}>
                {
                    products.length > 0 && (
                        <Table
                            headData={headData}
                            renderHead={(item: any, index: any) => renderHead(item, index)}
                            bodyData={products}
                            renderBody={(item: any, index: any) => renderBody(item, index)}
                            limit={10}
                        />)
                }
            </div>
        </div >
    )
}


export default Products