import React from 'react'


const className = {
    pagination: 'flex border w-fit divide-x rounded-md text-skin-text overflow-hidden',
    pagination_item: 'py-2 px-3 text-lg cursor-pointer',
    active: 'text-skin-main bg-skin-main'
}


const Table: React.FC<any> = (props) => {


    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = React.useState(initDataShow)

    let pages = 1

    let range: any = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = Array.from(Array(pages).keys())
    }

    const [currPage, setCurrPage] = React.useState(0)

    const selectPage = (page: number) => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page)
    }

    return (
        <div>

            <div className='overflow-auto'>
                <table className='w-full overflow-auto'>

                    {
                        props.headData && props.renderHead && (
                            <thead>
                                <tr className='text-left'>
                                    {
                                        props.headData.map((item: any, index: any) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        )
                    }
                    {
                        props.bodyData && props.renderBody && (
                            <tbody>
                                {
                                    dataShow.map((item: any, index: any) => props.renderBody(item, index))
                                }
                            </tbody>
                        )
                    }

                </table>
            </div>

            {
                pages > 1 && (
                    <div className={className.pagination}>
                        {
                            range.map((item: any, index: any) => (
                                <div key={index} className={`${className.pagination_item} ${currPage === index ? className.active : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                )
            }


        </div>
    )
}

export default Table