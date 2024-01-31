import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ShowSlider({ shows, onShowClick }) {
  const navigate = useNavigate();

  function handleShowMore(id) {
    onShowClick(id);
    navigate(`/details/${id}`);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % shows.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [shows]);

  const show = shows[currentIndex]?.show;

  return (
    <div className="relative max-w-full h-[90vh] overflow-hidden mb-10">
      {show && (
        <div key={show.id} className='w-full h-[100%] relative'>
          <img
            src={show.image?.original}
            alt={show.name}
            className="w-full h-[100%] object-cover object-top"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>

          <div className="absolute bottom-10 left-10 right-10 text-white p-4">
            <h2 className="text-4xl md:text-7xl font-bold mb-3">{show.name}</h2>
            <p className="text-base md:text-xl mb-3">Runtime: {show.runtime} minutes</p>
            <p className="text-base md:text-xl mb-3">Language: {show.language}</p>
            <div onClick={() => { handleShowMore(show.id) }}>
              <button className="mt-2 md:mt-4 bg-red-500 text-white px-4 md:px-6 py-2 md:py-2 text-xl md:text-3xl font-bold rounded">
                See More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
