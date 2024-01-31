import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowDetails from './pages/ShowDetails';
import UseShows from './hooks/UseShows';

const App = () => {

  const [selectedShow, setSelectedShow] = useState(null);
  const shows = UseShows();

  const handleShowClick = (showId) => {
    const selected = shows.find((show) => show.show.id === showId);
    setSelectedShow(selected.show);
  };

  return (
    <Router>
      {/* <h1 className='font-bold text-lg text-gray-500 '>cinés.</h1> */}
      <Routes>
      
        <Route path="/" element={<Home shows={shows} onShowClick={handleShowClick} />} />
        <Route path="/details/:id" element={<ShowDetails show={selectedShow} />} />
      </Routes>
    </Router>
  );
};

export default App;
