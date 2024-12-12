import { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {
  const [search, setsearch]= useState("")
  return (
    <>
    <div className="cointainer">
    <h3 className='text-primary mt-3'>Filter Data</h3>
    <form className='col-md-3'>
      <input className='form-control' type="text" placeholder='search text' onChange={(e)=>setsearch(e.target.value)}/>
    </form>
    <table className='mt-3 table table-striped table-bordered'>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
      {data.filter((item)=>{
        return search=== "" ? item : item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase()) || item.phone.includes(search)
       })
       .map((item,index)=>(
        <tr key={index}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          </tr>
          ))}
      </tbody>
    </table> 
    </div>
    </>
  )
}

export default App