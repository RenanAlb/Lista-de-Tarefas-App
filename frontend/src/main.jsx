import ReactDOM from 'react-dom'
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
