import { useState } from 'react';
import Popup from '../components/DetailsForm';
import { Link } from 'react-router-dom';

const ShowDetails = ({ show }) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const handleBookTicket = () => {
        setPopupVisible(true);
    };

    const handlePopupClose = () => {
        setPopupVisible(false);
    };

    return (
        <div className="w-full md:w-[50%] h-[100vh] m-auto p-4 rounded-md flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-[40%] h-[90%] mb-4 md:mb-0">
                <img
                    src={show?.image?.original}
                    alt="showimage"
                    className="w-full h-[100%] object-contain rounded-md"
                />
            </div>

            <div className='flex w-full md:w-[50%] flex-col items-start justify-between gap-4 md:gap-6'>
                <h1 className="font-bold text-red-500">{show.name}</h1>

                <div className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: show.summary }} />

                <div className="p-2 r mb-2 md:mb-4">
                    <div className="flex gap-2">
                        {show?.genres.map((gen, index) => (
                            <p key={index} className="px-2 py-1 border border-red-500 rounded">{gen}</p>
                        ))}
                    </div>
                </div>

                <div className="flex gap-2 mb-10">
                    <button
                        className="bg-red-500 px-4 py-2 rounded focus:outline-none focus:ring focus:border-none"
                        onClick={handleBookTicket}
                    >
                        Book Ticket
                    </button>

                    <Link to={'/'} >
                        <button className="px-4 py-2 rounded border-2 border-white">Go Back</button>
                    </Link>
                </div>
            </div>

            {isPopupVisible && (
                <Popup showName={show.name} onClose={handlePopupClose} />
            )}
        </div>
    );
};

export default ShowDetails;
