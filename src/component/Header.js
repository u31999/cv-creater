import React from "react";
import classes from '../layout/header.module.css';
import { NavLink } from "react-router-dom";




class Header extends React.Component{
    render() {
        return(
            <div className={classes.header}>
            <div className={classes.logo}>CV-Creater</div>
            <div className={classes.nav}>
            <nav>
            <NavLink to="/cv-creater" className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}> Home </NavLink>	
            <NavLink to='/tips' className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}>CV Tips</NavLink>
            <NavLink to='/template-examples' className={({isActive}) => (isActive) ? ` ${classes.active}`: ''}>Template Examples</NavLink>
            </nav>
            </div>
            </div>
            
        )
    }
}

export default Header;