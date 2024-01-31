import { useState, useEffect } from 'react';
import { api_url } from '../utils/constants';

function UseShows (){

    const [shows, setShows] = useState([]);

    async function getShows() {
        const res = await fetch(api_url);
        const data = await res.json();
        setShows(data);
    }

    useEffect(() => {
        getShows();
    }, []);

    return shows;
}

export default UseShows;