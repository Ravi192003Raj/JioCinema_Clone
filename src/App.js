import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Video from './components/Video';
import Home from './components/Home';
import Display from './components/Display';
import List from './components/List';

function App() {
  return (
    <>
      <Router basename="/JioCinema_Clone">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/video/:id' element={<Video/>}/>
        <Route exact path='/video/:id/display' element={<Display/>}/>
        <Route exact path='/list' element={<List/>}/>
        <Route exact path='/list/video/:id' element={<Video/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;