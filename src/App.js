import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App m-auto">
      <Router>
        <Routes>
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
