import React from 'react'
import { Routes, Route } from 'react-router'
import Branches from '../components/Branches/Branches.jsx'
import Catolog from '../components/Catalog/Catolog.jsx'
import Categories from '../components/Categories/Categories.jsx'
import Customers from '../components/Customers/Customers.jsx'
import Orders from '../components/Orders/Orders.jsx'
import Products from '../components/Products/Products.jsx'
import Report from '../components/Report/Report.jsx'
import Sidebar from '../components/SideBar/Sidebar.jsx'
import  SignIn  from '../components/SignIn/SignIn.jsx'

export default function Root (){
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route  element={<Sidebar/>}>
           <Route path="/order" element={<Orders/>} />
           <Route path='/products' element={<Products/>} />
           <Route path='/categories' element={<Categories/>} />
           <Route path='/branches' element={<Branches/>} />
           <Route path='/customers' element={<Customers/>} />
           <Route path='/report' element={<Report/>} />
           <Route path='/catolog' element={<Catolog/>} />
           </Route>
      </Routes>
    </div>
  )
}