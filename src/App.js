import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/landingPage/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/landingPage/Signup';
import InfoForm from './components/landingPage/InfoForm';
import Navbar from './components/landingPage/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/info' element={<InfoForm />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
