import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import { useState } from 'react'
import {useLocation} from 'react-router-dom'

function Main(props){

    const location=useLocation();
    // const [currentPage, setCurrentPage] = useState(1)

    
    const [menu,setMenu]= useState("All")
    const [search, setSearch]= useState("")
   
   let menu1='All'
    if(location.state!=null){
      menu1=location.state.menu
        
    }
    
 
    return (
      <div className="grid grid-row-2">
        <Navbar
          setCurrentPage={props.setCurrentPage}
          setMenu={setMenu}
          menu={menu1}
          setSearch={setSearch}
        />
      
        <Home
          setCurrentPage={props.setCurrentPage}
          currentPage={props.currentPage}
          menu={menu1}
          search={search}
        />
      </div>
    )
}
export default Main