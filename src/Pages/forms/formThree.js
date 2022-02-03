import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from '../../layout/form.module.css';

let language = [];
let software = [];

const Skills = class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            next: false,
            add:false,
        }
    }
    add(e) {
        let input = e.target.parentElement.firstElementChild;
        if(input.id === 'software') software.push(input.value);
        if(input.id === 'language') language.push(input.value);

        this.setState({add: true}, () => {
            input.value = '';
            if(input.id === 'software') this.props.data.skills.software = software;
            if(input.id === 'language') this.props.data.skills.language = language;
        })
    }
   
   
    render() {
        return(
            <div className={classes['show']}>
                <div className={classes.title}>Language</div>
                <div className={classes['input-with-add']}>
                <input type='text' id='language' placeholder="Press add to add language"></input>
                <button className={classes['next-btn']} onClick={this.add.bind(this)}>Add</button>
                </div>
                <div className={classes['sub-title']}>Software</div>
                <div className={classes['input-with-add']}>
                    <input type='text' id='software' placeholder="Press add to add software"></input>
                    <button className={classes['next-btn']} onClick={this.add.bind(this)}>add</button>
                </div>
                <div className={classes['add-container']}>
                    <div>language:</div>
                    <div  className={classes['data-container']}>
                    {language.map((l, i) => <div key = {i} className={classes['data']}>{l}</div>)}</div>
                    <div>Software:</div>
                    <div className={classes['data-container']}>
                        {software.map((s, i) => <div key = {i} className={classes['data']}>{s}</div>)}
                    </div>
                </div>
                <div className={classes['btn-container']}>
                <NavLink to='/form-fowr' state={this.props}>
                    <button className={classes['next-btn']}>Next</button>
                </NavLink>
                </div>
            </div>
        )
    }
}
const FormThree = () => {
    let location = useLocation();
    let data = location.state;
    return(
        <Skills data ={data}/>
    );
    
}

export default FormThree;