import {React,useState,useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import styles from './Statewise.module.css'
const Statewisechart = ({ statewise }) => {
    const [windowWidth, setwindow] = useState(window.innerWidth)
    useEffect(() => {
        setwindow(window.innerWidth)
    }, [windowWidth])
    
    const top_ten = statewise.sort((a, b) => b.active - a.active).slice(1, 11)
    const labels = []
    const active = []
    const recovered = []
    const death=[]
    const confirmed = top_ten.map(el => {
        labels.push(el.state)
        active.push(parseInt(el.active))
        recovered.push(parseInt(el.recovered))
        death.push(parseInt(el.deaths))
        return (parseInt(el.confirmed))
    })
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Active',
                data: active,
                backgroundColor: 'rgba(0, 53, 138, 0.5)',
                borderColor: 'rgba(0, 53, 138, 1)',
                fill: true
            },

            {
                
                label: 'Confirmed',
                data: confirmed,
                backgroundColor: 'rgba(102, 38, 171,0.5)',
                borderColor: 'rgba(102, 38, 171,1)',
                fill: true
            },
            {   
                label: 'Recovered',
                data: recovered,
                backgroundColor: 'rgba(25, 148, 3, 0.5)',
                borderColor: 'rgba(25, 148,3, 1)',
                fill: true
            },
            {
                label: 'Deaths',
                data:death,
                backgroundColor: 'rgba(212, 28, 28,0.5)',
                borderColor: 'rgba(212, 28, 28,1)',
                fill: true
            },

        ]
    }
    let options={}
    if (windowWidth<=1060){
     options={
        responsive:true,
        maintainAspectratio:false,
        scales: {
        x: {
            title: {
                display: true,
                text: 'COUNT',
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
                text: 'STATES',
                color: 'white',
            },
        }
    },
    plugins: {
        title:{
            display:true,
            text:'COVID  V/S STATES',
            font:{
                size:20,
                weight:'bold'
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
    }
}
else{
     options={
        responsive:true,
        maintainAspectratio:true,
        scales: {
        x: {
            title: {
                display: true,
                text: 'COUNT',
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
                text: 'STATES',
                color: 'white',
            },
        }
    },
    plugins: {
        title:{
            display:true,
            text:'COVID  V/S States',
            font:{
                size:20,
                weight:'bold'
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
    layout:{
        padding:15
    }
    }
}

    return (
        <div className={styles.Statewisechart}>
            <h1 style={{ margin: 0,padding: '2%' }}>Top 10 States In Terms Of Active Cases</h1>
            <h3 style={{ margin: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            {windowWidth<=1060?(<Bar data={data} height={150} width={120} options={options} />):
            <Bar data={data} options={options} height={95}/>}
            
        </div>
    )
}

export default Statewisechart
