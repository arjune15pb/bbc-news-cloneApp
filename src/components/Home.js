import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {database} from '../firebase/setup'

function Home(props){


    const [news,setNews]= useState([])
    
    const addNews = async(data)=>{
      const newsDoc=doc(database, "News",`${data.url.substr(-10,10)}` )

         try{
               await setDoc(newsDoc,{
                title:data.title, description: data.description,
                content:data.content, author: data.author, publishedAt:data.publishedAt,
                urlToNews:data.url
               })
         }catch(err){
          console.error(err)
         }
      
    }

    const getNews=()=>{
        fetch(
          `https://newsapi.org/v2/everything?q=${
            props.menu ? props.menu : 'All'
          }&sortBy=popularity&apiKey=735b8383aacf489398a06a4541ddae47`
        )
          .then((res) => res.json())
          .then((json) => setNews(json.articles))

    }

    useEffect(()=>{
        getNews();
    },[news])


    return (
      <div className="mt-12 p-5 grid grid-cols-4">
        { [...news].sort(function(a,b){
          
            if (a.urlToImage != null && b.urlToImage === null) {
              
              return -1
            }
            if (a.urlToImage === null && b.urlToImage != null) {
              
              return 1
              
            }
            return 0
            
          })
          ?.filter((data) => data.title.includes(props.search))
          ?.filter((data) => data.title != '[Removed]' )
          .map((data) => {
            return (
              <>
                <Link  onClick={()=> addNews(data)} to="/details" state={{data: data}}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                      className="w-full"
                      src={data.urlToImage}
                      alt={data.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{data.title}</div>
                      <p className="text-gray-700 text-base">{data.content}</p>
                    </div>
                  </div>
                </Link>
              </>
            )
          })}
      </div>
    )
}

export default Home