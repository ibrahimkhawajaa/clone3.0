
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home.jsx';
import Projects from './components/portfolio/portfolio';
import AnimatedCursor  from 'react-animated-cursor';



function App() {
  return (
    <>
    <BrowserRouter>

    <AnimatedCursor/>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Projects/>} path='/Project' />
    
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
