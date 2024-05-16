import {useLocation} from 'react-router-dom'
import Comments from "./Comments"

function NewsDetails(){

    const location=  useLocation()  //contains the details of param like state
 
    return (
     
        
        <div className="grid grid-cols-2">
          <div className="p-5">
            <h1 className="font-extrabold text-2xl">
              {location.state.data.title}
            </h1>
            <h4>{location.state.data.description}</h4>
            <img
              src={location.state.data.urlToImage}
              alt={location.state.data.title}
            />
          </div>
          <div>
            <Comments url={location.state.data.url} />
          </div>
        </div>
      
    )
}

export default NewsDetails