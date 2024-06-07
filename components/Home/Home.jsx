import React from 'react'
import './style.css'
import { useState } from 'react'
import TableData from '../TableData'

const Home = ({tableData}) => {
    const [searchQuery, setsearchQuery] = useState('')
    const handleChange =(e)=>{  
        setsearchQuery(e.target.value)
    }

    const filterData = tableData.filter(item => item.username.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div>
    <nav>
        <div className="nav-text">
            <h2>DATA GALA</h2>
            <span>
                <dotlottie-player src="https://lottie.host/828ed45a-f32a-411d-b87e-624372c1ceea/TCd53QsS4r.lottie" background="transparent" speed="1" style={{"width": "90px", "height": "90px"}} loop autoplay></dotlottie-player> 
            </span>
        </div>
        <div className="nav-search">
            <input type="text" name="username" placeholder='Search username.....' onChange={handleChange} value={searchQuery} />
            <span className='icon'><lord-icon
            src="https://cdn.lordicon.com/fkdzyfle.json"
            trigger="hover"
            colors="primary:#ffffff"
            style={{"width":"25px","height":"25px"}}>
            </lord-icon></span>
        </div>
    </nav>
      {searchQuery.length ===0 && <TableData tableData={tableData} />}
      {searchQuery.length !==0 && <TableData tableData={filterData} />}
    </div>
  )
}

export default Home
