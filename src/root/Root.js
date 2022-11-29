import React from 'react'
import { Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/SideBar/Sidebar.jsx'
import  SignIn  from '../components/SignIn/SignIn.jsx'
import { RouterData } from '../datas/RouterData.js'
import { RootC } from './style.js';

export default function Root (){
  return (
    <RootC>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route  element={<Sidebar/>}>
          {
            RouterData.map(item => {
              return(
                <Route key={item.id} path={item.path} element={item.element} />
              )
            })
          }
        </Route>
      </Routes>
    </RootC>
  )
}