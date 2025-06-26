import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Joke() {
    return (
        <div>
            <Myjoke />
        </div>
    );

}
function Myjoke() {
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchJoke = () => {
        setLoading(true);
        axios
            .get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            })
            .then((response) => {
                setJoke(response.data.joke);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching joke:', error);
                setJoke('Failed to load joke.');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchJoke();
    }, []);
    return (
        <div style={{ padding: '20px', textAlign: 'center',borderStyle: 'solid', }}>
            <h2>Random Joke</h2>
            {loading ? <p>Loading...</p> : <p>{joke}</p>}
            <button onClick={fetchJoke}>Random</button>
        </div>
    );
}