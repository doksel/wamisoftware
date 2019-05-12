
import React from 'react';
import style from './search.module.css';

let SearchMovie = (props) => {
    return(
        <div className={style.search}>
            <form className={style.searh_form}>     
                <input id="search_movie" className={style.search_movie} onChange={props.changeSaerch} type="text"/>
                <button onClick={props.showMovie}>Search</button>
            </form>
        </div>
    )
}

export default SearchMovie;