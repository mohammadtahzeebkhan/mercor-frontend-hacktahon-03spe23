import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage';
import { Routes, Route, Link,BrowserRouter as Router  } from 'react-router-dom';


function App() {
  return (
 
    <div>
  
    <Router>
     <Routes>
        <Route path="/" element={<Home/>} />
      

       
      </Routes>
      </Router>
      </div>

  

  
  );
}

export default App;
