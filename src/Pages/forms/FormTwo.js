import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from '../../layout/form.module.css';

const FormNumTwo = class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            clicked : false,
            newData: ''
        }
    }
    nextForm(data) {
        const textarea = document.querySelector('#about').value;
           this.props.data.about.about = textarea;
        this.setState({clicked: true, newData : this.props.data});
    }
    
    render(){
        return(
            <div className={classes.show}>
                <div className={classes.title}>About</div>
                <div className={classes['no-border-sub-title']}>Tell us about you</div>
                <div><textarea id='about' className={classes['about-textarea']}
                placeholder="Write here about yourself" rows='10' cols='50'>
                </textarea></div>
                <div className={classes['btn-container']}>
                    <NavLink to='/form-three' state={this.props.data}>
                    <button onClick={this.nextForm.bind(this)} className={classes['next-btn']}>Next</button>
                    </NavLink> :
                    
                </div>
            </div>
        )
    }
}

const FormTwo = () => {
    const location = useLocation();
    const data = location.state;
    return(
        <FormNumTwo data={data}/>
    )
}

export default FormTwo;