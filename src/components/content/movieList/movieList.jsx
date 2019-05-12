import React, { Component } from 'react';
import style from './movieList.module.css';
import { NavLink } from "react-router-dom";
import SearchMovie from "../search/search";

import { connect } from 'react-redux';
import { getMoviesList, getMovieSearch }  from '../../../actions/movieAction';

class MovieList extends Component {

    showMovie = () => {
        const input = document.querySelector('#search_movie');
        if(input){
            this.props.getMovieSearch(input.value.trim().toLowerCase());            
        }
    }

    componentWillMount() {
        this.props.getMoviesList();
    }
    render() {
        const movieList = this.props.movieList;
        const movieSearch = this.props.movieSearch;
        return(
            <div className="container">
                <SearchMovie showMovie={this.showMovie} movieId={movieSearch?movieSearch.movieId:null}/>
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
        movieSearch: state.movieReducer.movie,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMoviesList: () => dispatch(getMoviesList()),
        getMovieSearch: (title) => dispatch(getMovieSearch(title)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);