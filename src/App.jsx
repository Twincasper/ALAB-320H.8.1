import './App.css'
import { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';
import { Starship } from './Starship';


function App() {

    const [starships, setStarships] = useState([]);

    useEffect(() => {
        getAllStarships().then(data => setStarships(data));
    }, []);

    return (
        <>
            <h1>STAR WARS STARSHIPS</h1>
            <div className="starship-list">
                {starships.map(starship => (
                    <Starship key={starship.url} starship={starship} />
                ))}
            </div>
        </>
    );
}

export default App
