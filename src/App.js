import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import SearchIcon from './search.svg'
import './App.css';
// f2a64b7e

const API_URL = 'http://www.omdbapi.com?apikey=f2a64b7e';


const App =() => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
            searchMovies('Spirited Away');
    }, []);

    return (
        <div className="app">
            <h1>FlixPicks</h1>
            <div className="search">
            <input
                placeholder="Search for movies"
                value = {searchTerm}
                onChange = {(e) => setSearchTerm(e.target.value)}
            />  
            <img 
                src={SearchIcon}
                alt ="search"
                onClick={() => searchMovies(searchTerm)}
                />  
            </div>

            {movies?.length > 0 ? (
                    <div className ="container">
                        {movies.map((movie)=> (
                            <MovieCard movie = {movie}/>
                        ))}
                    </div>

                ) : (
                    <div className = "empty">
                        <h2>No movies found</h2>
                    </div>
                )}

        </div>

    );
};

export default App;