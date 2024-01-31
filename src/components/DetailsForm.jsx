import { useState } from 'react';

const Popup = ({ showName, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePopupConfirm = (userDetails) => {
        localStorage.setItem('userDetails', JSON.stringify({ ...userDetails, showName: showName }));
        alert('Ticket booked successfully!');
        onClose();
    };

    const handleConfirm = () => {
        if (name.trim() === '' || email.trim() === '') {
            setErrorMessage('Please enter all details.');
        } else {
            setErrorMessage('');
            const userDetails = {
                name,
                email,
            };
            handlePopupConfirm(userDetails);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] bg-[#242424] p-8 border-4 border-red-500 rounded-md shadow-md text-white">

                <h2 className="text-lg mb-4">Show Name: <span className='font-bold'>{showName}</span></h2>

                <label className="block mb-4">
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full p-2"
                    />
                </label>

                <label className="block mb-4">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded w-full p-2"
                    />
                </label>

                {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

                <div className="flex justify-end">
                    <button
                        onClick={handleConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onClose}
                        className="text-white px-4 py-2 rounded border-2 border-white"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
