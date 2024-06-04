import {useLocation} from 'react-router-dom'
import Comments from "./Comments"
import React, { useEffect, useState } from 'react'

function NewsDetails(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const location=  useLocation()  //contains the details of param like state
 
    return (
      <div className=" grid grid-cols-2">
        <div className="mt-12 p-5 ">
          <h1 className=" font-extrabold text-2xl">
            {location.state.data.title}
          </h1>
          <h6 className="mt-3 text-1x2">{location.state.data.publishedAt.split('T')[0]}</h6>
          <h6 className="mt-3 font-bold">{location.state.data.author}</h6>
          <h4 className="mt-5">{location.state.data.description}</h4>
          <img
            src={location.state.data.urlToImage}
            alt={location.state.data.title}
          />
          <h4 className="mt-5">{location.state.data.content.split('[')[0]}</h4>
         
          <h4 className="mt-5">
            For More Details{' '}
            <span>
              <a href={location.state.data.url} target="_blank" className="mt-5 text-blue-600">
                Click here
              </a>
            </span>
          </h4>
          
        </div>
        <div className="mt-12">
          <Comments url={location.state.data.url} />
        </div>
      </div>
    )
}

export default NewsDetails