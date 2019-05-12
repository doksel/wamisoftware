
import React from 'react';
import style from './search.module.css';

import { NavLink } from "react-router-dom";

let SearchMovie = (props) => {
    return(
        <div className={style.search}>
            <form className={style.searh_form}>     
                <input id="search_movie" className={style.search_movie} onChange={props.showMovie} type="text"/>
                <NavLink className={style.button} to={props.movieId?`/movie/${props.movieId}`:`/movie`}>Search</NavLink>
            </form>
        </div>
    )
}



export default SearchMovie;