import React from 'react'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const App = () => {
  const [mydata, setMydata] = useState([]);
  const [bgcolor, setBgcolor] = useState("transparent");
  useEffect(() => {
    axios.get('https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3')
      .then((ele) => setMydata(ele.data))
  })
  return (
    <>
      <div className='list'>
        {
          mydata.map((color, index) => {
            return (
              <>
                <li id={index} style={{ background: `${color}`, cursor: 'pointer' }} onClick={() => setBgcolor(color)} ></li>
              </>
            )
          })
        }
      </div>
      <span style={{ background: `${bgcolor}` }} className="abc"></span>
    </>
  )
}

export default App;