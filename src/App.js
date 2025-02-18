// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// let name = "Harshit";
function App() {
  const [mode, setMode] = useState("light"); //video12 //wheather dark mode enable or not
  const [text, setText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "grey ";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Home(Dark Mode)";
    } else {
      setMode("light");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Home(Light Mode)";
    }
  };
  const showAlert = (message, type) => {
    //This is a function
    setAlert({
      //this is an object
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    //This is jsx which is mainly html and some js we can write js inside {} with html this makes our code unified
    // <> //This is jsx fragment
    // <h>yeah buddy</h>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // </>
    // <>
    // <div className="blank">Lovely</div>
    // <nav>
    //   <li>Home</li>
    //   <li>About</li>
    //   <li>Contact</li>
    // </nav>
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga quae aspernatur, fugiat praesentium at labore sapiente necessitatibus cumque earum atque? Earum ea blanditiis similique laudantium modi rem quasi officia.</p>
    // </div>
    // </>


    // <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    // <div className="container my-3">
    // <TextForm heading="Enter the text to analyze below" mode={mode}/> 
    // <About/> //before adding router in our app
    
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* Use the `element` prop to render the About component */}
          <Route exact path="/about" element={<About />} />
          {/* Use the `element` prop to render the TextForm component */}
          <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
