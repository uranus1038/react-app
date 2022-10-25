
import './App.css';
import {BrowserRouter as Router ,  Route , Routes} from "react-router-dom";

//Components
import Index from './pages/index';
import Register from './pages/register';


function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
