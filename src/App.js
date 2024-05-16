
import './App.css';
import Signin from './components/Signin';

import Navbar from './components/Navbar';
import Main from './components/Main';

import {Route,Routes} from 'react-router-dom'
import NewsDetails from './components/NewsDetails';

function App() {
  return (
     <>
     <Routes>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<Main/>}/>
      <Route path='/details' element={<NewsDetails/>}/>
     </Routes>
     {/* <Signin/> */}
    

     </>
  );
}

export default App;
