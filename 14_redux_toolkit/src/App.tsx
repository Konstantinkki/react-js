import React from 'react';
import './App.css';
import {Login} from './pages/Login'
import {Contact} from './pages/Contact'
import {Home} from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/login">Loign</Link>
          <Link to="/contact">Contact</Link>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/login' element = {<Login />}/>
            <Route path='/contact' element = {<Contact/>}/>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
