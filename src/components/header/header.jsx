import React from 'react';
import logo from '../../logo.svg';
import style from './header.module.css';

import { NavLink } from "react-router-dom";

let Header = (props) => {
    return(
        <header className={style.header}>
            <div className="headr-top">
                <img className={style.logo} src={logo} alt="app-logo"/>
            </div>
            <NavLink to="/movie" className={style.link}>Movies List</NavLink>
        </header>
    )
}

export default Header;