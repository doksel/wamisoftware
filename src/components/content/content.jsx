import React from 'react';
import Main from "./main/main";
import MovieList from "./movieList/movieList";
import MovieItem from "./movieList/movieItem/movieItem";

import { Route, Switch } from "react-router-dom";

const Content = (props) => {
    return(
        <div className="content">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/movie" render ={()=><MovieList />} />
                <Route path="/movie/:movieId" component={MovieItem} />
            </Switch>
        </div>
    )
}

export default Content;