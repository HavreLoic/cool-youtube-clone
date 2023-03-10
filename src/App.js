import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

import './App.css';

const App = () => (
  <BrowserRouter className="App">
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
