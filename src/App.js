import { Route,Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import MessengerPage from './pages/MessengerPage';
import LikePage from './pages/LikePage';
import AboutProPage from './pages/AboutProPage';
import Login from './components/register/Login';
import PlusPage from './pages/PlusPage';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/messenger' element={<MessengerPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='Log in' element={<Login/>}/>
          <Route path='/like' element={<LikePage/>}/>
          <Route path='/aboutProduct/:id' element={<AboutProPage/>}/>
          <Route path='/addCart' element={<PlusPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
