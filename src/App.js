import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';
import 'typeface-roboto'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<HomePage/>}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
