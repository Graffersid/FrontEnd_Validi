import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/landingPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
