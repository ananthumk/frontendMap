import DashBoard from './components/DashBoard';
import LoginForm from './components/LoginForm';
import './App.css';
import Map from './components/Map';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element = {<ProtectedRoute element={<DashBoard />} />} />
          <Route path='/map/:id' element =  {<ProtectedRoute element={<Map />} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
