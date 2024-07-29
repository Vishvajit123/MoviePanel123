import React, { useEffect, useState } from 'react';
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import {Link} from "react-router-dom";

const Home = () => {
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    });
    const [popularMovies, setPopularMovies] = useState([]);
    return (
        <>
            <div className="post">
                <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2.5}
                infiniteLoop={true}
                showStatus={false}
                >
{
    popularMovies.map(movie =>(
        <Link style={{textDecoration: "none", color:"white"}} to={`movie/${movie.id}`}>
            <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original ${movie&&movie.bookdrop_path}`}/>
            </div>
            <div className="posterImage_overlay">
                <div className="posterImage_title"> {movie ? movie.original_title : " "}</div>
                <div className="posterImage_runtime"> {movie ? movie.relese_date : " "}
                    <span className="posterImage_rating">{movie ? movie.vote_average : " "}
                        <i className="fas fa-star"/>{" "}
                    </span>
                </div>
            </div>
        </Link>
        // <span>{movie.original_title}</span>
    ))
}

                </Carousel>
            </div>
            {/* HomePage */}
        </>
    )
}

export default Home;