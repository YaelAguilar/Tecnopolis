import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {

  return(

    <BrowserRouter>
        <Routes>
            <Route index element={<Home/>}/>
        </Routes>
    </BrowserRouter>

    

  );
}

export default App;