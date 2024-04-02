import logo from './logo.svg';
import './App.css';


//Pages
import Home from './Pages/Home';

//Components
import Header from './Components/Header';



import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={ <Home/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
