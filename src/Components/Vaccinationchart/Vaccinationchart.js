import {React,useState,useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import styles from './Vaccinationchart.module.css'
const Vaccinationchart = ({ tested_data }) => {
    const [windowWidth, setwindow] = useState(window.innerWidth)
    useEffect(() => {
        setwindow(window.innerWidth)
    }, [windowWidth])
    
    const first_vaccinated = []
    const second_vaccinated = []
    const labels = []
    var dd=''
    var mm=''
    var yy=''
    const monthNames = ["-","January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const tested = tested_data.slice(70).map((el) => {
        if (el.firstdoseadministered !== '') {
            first_vaccinated.push(parseInt(el.firstdoseadministered))
        }
        else{
            first_vaccinated.push(parseInt(0))
        }
        if (el.seconddoseadministered !== '') {
            second_vaccinated.push(parseInt(el.seconddoseadministered))
        }
        else{
            second_vaccinated.push(0)
        }
        
        [dd,mm,yy]=el.testedasof.split('/')
        labels.push(dd+' '+monthNames[parseInt(mm)]+' '+yy)
        if(el.samplereportedtoday===""){
            return(null)
        }
        return (parseInt(el.samplereportedtoday))

    })
    const data = {
        labels: labels,
        datasets: [{
            label: 'Tests',
            data: tested,
            fill:true,
            borderColor: 'rgba(223, 164, 76, 1)',
            backgroundColor: 'rgba(223, 164, 76, 0.7)',
            
        },
        {
            label: '1st Dose Vaccinated',
            data: first_vaccinated,
            fill:true,
            borderColor: 'rgb(252, 98, 252,1)',
            backgroundColor: 'rgb(252, 98, 252,0.7)',
        },{
            label:'2nd Dose Vaccinated',
            data:second_vaccinated,
            fill:true,
            borderColor:'rgb(252,200,190)',
            backgroundColor:'rgb(252,200,190,0.7)',
        }]
    }
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
                text:'Vaccination And Tests V/S Time',
                font:{
                    size:25,
                    weight:'bold'
                }
            },
            legend: {
                labels: {
                    font: {
                        size:18
                    }
                }
            }
        },
        layout: {
            padding:15
        }
    }

    return (
        <div className={styles.Vaccinationchart}>
            <h1 style={{ margin: 0,paddingTop: '2%' }}>Comparision Between Vaccination And Tests (India)</h1>
            <h3 style={{ margin: 0 }}>(Click On Legends To Show/Hide Individual Graph )</h3>
            {windowWidth>=1060?<Line data={data} options={options} height={100} width={100} />:
            <Line data={data} options={options} height={500} width={120} />}
            
        </div>
    )
}

export default Vaccinationchart
