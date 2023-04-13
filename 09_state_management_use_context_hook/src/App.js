import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { useState, createContext } from 'react'
import { Profile } from './pages/Profile'
import { Notfound } from './pages/Notfound'
import { Navbar } from './pages/Navbar'
import { Contact } from './pages/Contact'

export const AppContext = createContext();


function App() {
  const [userName, setUserName] = useState("PedroTech");
  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        </Router>
        </AppContext.Provider>
    </div>
  );
}

export default App;


/*

const TopComponent = ()=>{
  const [state, setState] = useState();
  return (
    <div>
     <MiddleComponent state={state}/>
    </div>
  )
}

const MiddleComponent = (state)=>{
  return (
    <div>
        <BottomComponent state={state}/>
    </div>
  )
}

const BottomComponent = (state) => {
  return <div>{state}</div>
}*/