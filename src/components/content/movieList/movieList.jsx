import React, { Component } from 'react';
import style from './movieList.module.css';
import { NavLink } from "react-router-dom";
import SearchMovie from "../search/search";

import { connect } from 'react-redux';
import { getMoviesList, getMovie }  from '../../../actions/movieAction';


class MovieList extends Component {

    showMovie = (e) => {
        e.preventDefault();
        const input = document.querySelector('#search_movie');
        if(input){
            let movie = this.props.movieList.find(currentValue => currentValue.title === input.value)
            this.props.getMovie(movie.movieId);
            window.location.href += `/${movie.movieId}`;
        }
        return `movie/1`;
    }

    componentWillMount() {
        this.props.getMoviesList();
    }
    render() {
        const movieList = this.props.movieList;
        return(
            <div className="container">
                <SearchMovie showMovie={this.showMovie}/>
                <div className={style.movies}>
                    <h1>Movies</h1>
                    <div className={style.movies_list}>
                        {movieList.map(movie => (
                            <NavLink to={`/movie/${movie.movieId}`} className={style.movie_item} key={movie.movieId}>
                                <div className={style.movie_image}>
                                    <img src={movie.image} alt={movie.title}/>
                                </div>
                                <div className={style.movie_title}>{movie.title}</div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieList: state.movieReducer.movieList,
        movie: state.movieReducer.movi,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMoviesList: () => dispatch(getMoviesList()),
        getMovie: (movieId) => dispatch(getMovie(movieId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);