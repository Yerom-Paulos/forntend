import React from 'react';
import './App.css';
import SignIn from './SignIn';
import Form from './Form';
import Home from './Home';
import SignUp from './SignUp';
import { Route, Link, Outlet, Routes } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
        <Routes>
      <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/form" element={<Form />}/>
          </Routes>
      </nav>
    </div>
    </Router>
  );
}

export default App;