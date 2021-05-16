import './App.css';
import React, { useEffect, useState } from 'react'
import Introduction from './Components/Introduction/Introduction'
import Protect from './Components/Protect/Protect';
import axios from 'axios'
import Casetimechart from './Components/Casetimechart/Casetimechart';
import Statewisechart from './Components/Statewisechart/Statewisechart';
import Vaccinationchart from './Components/Vaccinationchart/Vaccinationchart';
import Latestnews from './Components/Latestnews/Latestnews';
import Footer from './Components/Footer/Footer';

function App() {
  const url = "https://api.covid19india.org/data.json"
  const [casetime, setcasetime] = useState([])
  const [statewise, setstatewise] = useState([])
  const [tested, settested] = useState([])
  const getData = async () => {
    const response = await axios.get(url)
    await setcasetime(response.data["cases_time_series"])
    await setstatewise(response.data.statewise)
    await settested(response.data.tested)
  }
  useEffect(() => {
    getData()
  }, [])
  const n = tested.length
  return (
    <div className="App">
      {(statewise.length !== 0 && tested.length !== 0) ? (
        <>
          <div className='Nav'>
            <h1>COVID-<span style={{ color: '#f71111' }}>19</span></h1>
          </div>
          <Introduction total_cases={statewise[0].confirmed} total_deaths={statewise[0].deaths} total_recovered={statewise[0].recovered} total_tests={tested[n - 1].totalsamplestested} total_vaccinated={tested[n - 1].totaldosesadministered} />
          <Protect />
          <Casetimechart casetime={casetime} />
          <Statewisechart statewise={statewise} />
          <Vaccinationchart tested_data={tested} />
          <Latestnews />
          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;
