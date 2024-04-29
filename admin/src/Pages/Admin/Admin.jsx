import React from 'react'
import './Admin.css'
import {Routes,Route} from 'react-router-dom'
import Addproduct from '../../Components/Add product/Addproduct'
import Listproduct from '../../Components/List product/Listproduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
    <Routes>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/listproduct' element={<Listproduct/>}/>
    </Routes>
    </div>
  )
}

export default Admin
