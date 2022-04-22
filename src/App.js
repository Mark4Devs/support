import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Activity from './pages/Activity';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>  
        <Route path='/' element={<Home />}/>
        <Route path='/activity' element={<Activity />}/>
      </Routes>  
      <Footer />  
    </div>    
  );
}

export default App;
 