import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
