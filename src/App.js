import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App m-auto">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/' element={<Home />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='payout' element={<Dashboard />} />
            <Route path='wallet' element={<Dashboard />} />
            <Route path='fund-manager' element={<Dashboard />} />
            <Route path='settings' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
