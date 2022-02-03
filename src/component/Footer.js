import React from "react";
import classes from '../layout/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCoffee)

const Footer = class extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                clicked: false
            }
        }
        openUrl(e){
            this.setState({clicked : true},
                this.handleOpen(e));
        }
        handleOpen(e){
            const urls = {
            github : 'https://github.com/u31999/cv-creater',
            linkdin : 'https://www.linkedin.com/in/ahmed-hassan-elzain/',
        }
            if(e.target.id === 'github' || e.target.parentElement.id === 'github') {
                window.open(urls.github, '_blank');
            }
            if(e.target.id === 'linkdin' || e.target.parentElement.id === 'linkdin') {
                window.open(urls.linkdin, '_blank');
            };
        }
    render() {
        
        return(
            <footer className={classes.footer}>
                <div>
                    <div className={classes.text}>Copyright © Ahmed Hassan. All Rights Reserved.</div>
                    <div className={classes.icon}>
                        <FontAwesomeIcon icon={['fab', 'github']} id = 'github' className={classes.theIcon} onClick={this.openUrl.bind(this)}/>
                        <FontAwesomeIcon icon={['fab', 'linkedin']} id = 'linkdin' className={classes.theIcon} onClick={this.openUrl.bind(this)}/>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;