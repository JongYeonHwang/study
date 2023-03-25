import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import Leaderboard from './routes/Leaderboard';
import Card from './routes/Card';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:level' element={<Card/>}/>
        <Route path='/result' element={<Leaderboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
