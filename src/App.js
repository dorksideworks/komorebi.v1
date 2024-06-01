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
      <div className="App bg-komorebi-dark">
        <div class="komorebi-wrapper mx-auto px-20 relative">
          
          <Header class="z-50"/>
          <Routes>
            <Route path="/" element={ <Home/> } />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
