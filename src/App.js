// import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
       setAlert({
         msg : message,
         type : type
       });
       setTimeout(() => {
         setAlert(null);
       }, 1000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode has been enabled' , 'Success');
      document.title = 'Textutils | DarkMode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled' , 'Success');
      document.title = 'Textutils | LightMode';
    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <Textform heading="Enter your text to analyze" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
