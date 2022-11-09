
import './App.css';
import {BrowserRouter as Router ,  Route , Routes} from "react-router-dom";

//Components
import Index from './pages/index';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          {/* render index */}
          <Route path="/" element={<Index/>}/>
          {/* render Register */}
          <Route path="/register" element={<Register/>}/>
          {/* render Login */}
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
