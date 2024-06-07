import { useEffect,useState } from 'react'
import './App.css'  
import Home from '../components/Home/Home'

function App() {
  const [Data, setData] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
  }, [])
  

  return (
    <>
      <Home tableData={Data} />
      
    </>
  )
}

export default App
