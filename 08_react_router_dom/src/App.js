import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'
import { Notfound } from './pages/Notfound'
import { Navbar } from './pages/Navbar'


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
