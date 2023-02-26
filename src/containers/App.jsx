import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserContext from '../context/UserContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Landing from '../pages/Landing';
import ProtectedParentRoute from './ProtectedParentRoute';

function App() {
  const [isLoged, setIsLoged] = useState(false)
  
  return(

    <BrowserRouter>
        <UserContext.Provider value={{ isLoged, setLoged}}>

          <Routes>

              <Route index element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/landing' element={<Landing/>}
                  />
              </Route>

          </Routes>

        </UserContext.Provider>  
    </BrowserRouter>
  );
}

export default App;