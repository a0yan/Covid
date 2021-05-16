import React from 'react'
import { Line, defaults } from 'react-chartjs-2'
import styles from './Casetimechart.module.css'
defaults.color = 'rgba(255,255,255)'
const Casetimechart = ({ casetime }) => {
    const deaths = []
    const labels = []
    const recovered = []
    const cases = casetime.map((el) => {
        deaths.push(parseInt(el.dailydeceased))
        labels.push(el.date)
        recovered.push(parseInt(el.dailyrecovered))
        return (parseInt(el.dailyconfirmed))
    }) 
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Active',
                data: cases,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Deaths',
                data: deaths,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
                
            },
            {
                label: 'Recovered',
                data: recovered,
                backgroundColor: 'rgba(25, 148, 3, 0.2)',
                borderColor: 'rgba(25, 148, 3, 1)',
                fill: true,
                
            }
        ],
    };

    const options = {
        responsive:true,
        maintainAspectRatio:false,

        elements: {
            point:{
                radius: 1
            }},
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'DAYS',
                    color: 'white',
                    
                },
                ticks: {
                    display: true,
                    color:'white'
                },
                

            },
            y: {
                title: {
                    display: true,
                    text: 'COUNT',
                    color: 'white',
                },
            }
        },
        plugins: {
            title:{
                display:true,
                text:'COVID V/S Time',
                font:{
                    size:18,
                }
            },
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            }
        },
        layout: {
            padding: 15
        }
    }


    return (
        <div className={styles.Casetimechart} style={{ backgroundColor: '#3E54D2', height: '100vh', width: '100vw'}}>
            <h1 style={{ margin: 0,paddingTop: '0.5%' }}>Visualised Data of New Cases , Recovery And Deaths (India)</h1>
            <h3 style={{ margin: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            <Line data={data} options={options} height={96} width={250} />
        </div>
    )
}

export default Casetimechart
