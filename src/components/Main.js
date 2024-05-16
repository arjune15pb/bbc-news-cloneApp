import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'

function Main(){

    const location=useLocation();


    const [menu,setMenu]= useState("All")
    const [search, setSearch]= useState("")

    
    return (
        <div className='grid grid -row-2'>
            <Navbar setMenu={setMenu} menu={menu} setSearch={setSearch}/>
            <Home menu={menu} search={search}/>
        </div>
    )
}
export default Main