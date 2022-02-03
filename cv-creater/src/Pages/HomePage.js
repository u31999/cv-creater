import React from "react";
import classes from '../layout/homePage.module.css';
import imacImage from '../resources/imac-online-cv-builder-cv-template.png';
import { NavLink } from "react-router-dom";

const HomePage = class extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clickDivBtn: false,
        }
    }

    clicked(e) {
        this.setState({clickDivBtn: true}, 
            () => e.target.firstElementChild.click())
    }

    render() {
        return(
            <div className={classes.body}>
                <div className={classes['first-text']}>The Faster way To Build A Professional CV</div>
                <div className={classes['promotion-container']}>
                    <div className={classes['image-container']}><img src={imacImage} /></div>
                    <div className={classes['list-container']}>
                        <ul>
                            <li>100% Free To Use</li>
                            <li>Awesome Designed Templates</li>
                            <li>Fast and Easy Tool</li>
                        </ul>
                    </div>
                </div>
                <div className={classes['link-container']}>
                <div>
                    <NavLink to="/choose-template" className={classes.button}>Start Creating Your CV</NavLink>
                </div>
                </div>
            </div>
        )
    }
}

export default HomePage;