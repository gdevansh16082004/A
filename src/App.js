import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");

    }
    else {
      setMode('dark');
      setText("Enable Light Mode");
      document.body.style.backgroundColor = '#0A1045';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} text={text} toggleMode={toggleMode} />,
      <Alert alert={alert}/>
      <div className="container my-3 ">
        {/* <Routes> */}
        {/* /users-->Component 1
            /users/home-->Component 2 */}
        {/* <Route exact path="/about" element={<About mode={mode}/>}> */}
        {/* </Route>
        <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces " showAlert={showAlert} />}>
        </Route>
        </Routes> */}
        
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
