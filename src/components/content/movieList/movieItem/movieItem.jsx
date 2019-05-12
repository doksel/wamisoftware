import React from 'react';
import movies from '../movieList.module.css';
import { connect } from 'react-redux';
import { getMoviesList, getMovie }  from '../../../../actions/movieAction';

class MovieItem extends React.Component{

    componentWillMount() {
        this.props.getMoviesList();
        const movieId = this.props.match.params.movieId;
        this.props.getMovie(movieId);
    }
    componentDidMount() {
    }
    render(){
        const movie = this.props.movie;
        
        return(
            <div className={movies.movie}>
                <div className="container">
                    <h1>{movie.title}</h1>
                    <iframe src={movie.url} width="560" height="315" frameBorder="0" muted="muted" autoPlay="autoplay" loop="loop"></iframe>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movieList: state.movieReducer.movieList,
        movie: state.movieReducer.movie,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMoviesList: () => dispatch(getMoviesList()),
        getMovie: (movieId) => dispatch(getMovie(movieId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);