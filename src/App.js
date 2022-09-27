
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';

function App() {
  return ( 

   
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='Login' element={<Login />} />
          <Route exact path='SignUp' element={<SignUp />} />
          <Route exact path='Dashboard' element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />}
          />
        </Routes>
      </Router>
   
  );
}

export default App;
