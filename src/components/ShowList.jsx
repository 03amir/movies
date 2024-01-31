import { Link, useNavigate } from 'react-router-dom';

const ShowList = ({ shows, onShowClick }) => {

    const navigate = useNavigate();

    function handleShowMore(id){
        onShowClick(id)
        navigate(`/details/${id}`)
    }

    return (
        <div className="flex w-screen justify-center flex-col items-center mb-20 ">
            <h2 className='text-3xl font-semibold mb-10'>You may also like.</h2>
            <div className="w-[70%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {shows.map((show) => (
                    <div key={show.show.id} className="m-4 p-4 border-2 border-black rounded-sm overflow-hidden transition-transform transform hover:scale-105">
                        <div className="relative overflow-hidden group">
                            <img
                                src={show.show?.image?.medium}
                                alt='showimage'
                                className="w-full h-auto mb-2 rounded-md transition-transform group-hover:scale-105"
                            />
                            <div onClick={() => { handleShowMore(show.show.id) }} className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               
                                    <button className="text-white px-4 py-2 rounded-md bg-red-400 hover:bg-red-700">
                                        Show Summary
                                    </button>
                              
                            </div>
                        </div>
                        <h2 className="text-lg font-semibold mt-2 ">{show.show.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowList;
