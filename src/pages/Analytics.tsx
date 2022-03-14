import React from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'

const className = {
    container: 'bg-skin-main m-2 rounded-skin shadow-skin min-h-[280px]'
}

const Analytics = () => {

    const themeReducer: any = useSelector<any>(state => state.ThemeReducer)
    const mode = themeReducer.mode === 'theme-mode-light' ? 'light' : 'dark'

    const options = { ...chartOptions.options }

    return (
        <div className='grid lg:grid-cols-2'>

            <div className={className.container}>
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

            <div className={className.container}>
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
                    type='bar'
                    height='100%'
                />
            </div>


            <div className={className.container}>
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
                    type='area'
                    height='100%'
                />
            </div>
            <div className={className.container}>
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
                    type='heatmap'
                    height='100%'
                />
            </div>
            <div className={className.container}>
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
                    type='radar'
                    height='100%'
                />
            </div>

        </div>
    )
}

export default Analytics


const chartOptions = {
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
        colors: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
        legend: {
            position: "top"
        },
        grid: {
            show: true
        }
    }
}