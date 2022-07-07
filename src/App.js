import logo from './logo.svg';
import './App.css';
import React from 'react' ;
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import Home from './components/Home.js';
import Selection from './components/CourseSelection.js';
import CourseDetail from './components/CourseDetail.js';

function App() {
  return (
    <div className="App">
  
      <header className="App-header">
        </header>
           <Router>
        
        <nav className='App-nav' >
          <div><Link to="/" color="white"  >Home</Link></div>
          <div><Link to="/selection/:filter">Pick a course</Link></div>
          <div><Link to="/coursedetail/:course_id">CourseDetail</Link></div>
        </nav>
        <div>
        <Routes>
          <Route path="/coursedetail/:course_id" 
                  element={<CourseDetail/>}
                  />
          <Route path="/selection/:filter"
            element={<Selection/>}
            />
          <Route path="/"
            element={<Home/>}
            />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
