import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not



  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextAnalysis" mode={mode} toggleMode={toggleMode} key={new Date()} />
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextBox heading="Try TextAnalysis - word counter, character counter, remove extra spaces, etc..." mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;