import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Main from './Components/Dashboard/Mainbody/Main';
import Error from './Components/Error/Error';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/Signin' element={<Signup/>}></Route>
    <Route path='/dashbord' element={<Main/>}></Route>
    <Route path='*' element={<Error/>}></Route>

    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
