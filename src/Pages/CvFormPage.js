import React from "react";
import classes from '../layout/form.module.css'
import { useLocation,  NavLink} from "react-router-dom";
let cv = {
    templateName: '',
    genralInfo: {
        fullName: '',
        phone: '',
        occapution: '',
        email: '',
        socialMedia: {
            github: '',
            linkidin: '',
            facebook:''
        }
    },
    about : {about: ''},
    skills : {
        language: [],
        software: [],
    },
    exprinces: [],
    unvirsitys: [],
}

const FormOne = class extends React.Component {
    constructor() {
        super();
        this.state = {
            next: false,
            open:true,
            form: '',
        }   
    }
    handleNext() {
        const getValues = (formContainer) => {
                 let name, phone, occupation, email;
                 let socialMedia = {
                     github: '',
                     linkdin: '',
                     facebook: '',
                 } 
                formContainer.childNodes.forEach(el => {
                    el.childNodes.forEach(ch => {
                        if(ch.nodeName === 'INPUT') {
                            if(ch.id === 'name') name = ch.value;
                            if(ch.id === 'phone') phone = ch.value;
                            if(ch.id === 'occupation') occupation = ch.value;
                            if(ch.id === 'email') email = ch.value;
                        }
                        if(ch.childNodes) {
                            ch.childNodes.forEach(c => {
                                if(c.nodeName === 'INPUT') {
                                    if(c.id === 'github') socialMedia.github = c.value;
                                    if(c.id === 'linkdin') socialMedia.linkidin = c.value;
                                    if(c.id === 'facebook') socialMedia.facebook = c.value;
                                }
                            })
                        }
                    })
                });
                return {
                    fullName: name,
                    phone: phone,
                    occupation: occupation,
                    socialMedia: socialMedia,
                    email: email,
                }
             }
            let formContainer = document.querySelector(`div .${classes['form-bart-one']}`);
            let values = getValues(formContainer);
            let errorBox = formContainer.querySelector(`div .${classes['error-box']}`);

            

            if(values.fullName !== '' && values.phone !== '') {
                cv.genralInfo.fullName = values.fullName;
                cv.genralInfo.phone = values.phone;
                cv.genralInfo.occapution = values.occupation;
                cv.genralInfo.email = values.email;
                let socialMediaName = [...Object.keys(values.socialMedia)];
                socialMediaName.forEach(s => {
                    if(values.socialMedia[`${s}`] !== '') {
                        cv.genralInfo.socialMedia[`${s}`] = values.socialMedia[`${s}`];
                    }
                })
            }
        this.setState({next: false});
}
    
    render() {
        return(
            <div className={classes.show}>
                <div className={classes.title}>Genral Information</div>
                <div className={classes['form-bart-one']}>
                    <div className={classes['error-box']}></div>
                        <div className={classes['input-container']}>
                        <label htmlFor="name">Name:</label>
                        <input type='text' id='name' placeholder="Enter Your Name"/>
                        </div>
                        <div className={classes['input-container']}>
                            <label htmlFor="phone">Phone:</label>
                            <input type='number' id='phone' placeholder="Enter Your Number" />
                        </div>
                        <div className={classes['input-container']}>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' placholder='Enter Your Email' />
                        </div>
                        <div className={classes['input-container']}>
                        <label htmlFor='occupation'>Occupation:</label>
                        <input type='text' id='occupation' placholder='Enter Your Occapation' />
                        </div>
                        <div>
                            <div className={classes['sub-title']}>Social Media</div>
                            <div className={classes['input-container']}>
                                <label htmlFor='github'>Github:</label>
                                <input type='text' id='github' placeholder="Github account" />
                            </div>
                            <div className={classes['input-container']}>
                                <label htmlFor='linkdin'>Linkdin:</label>
                                <input type='text' id='linkdin' placeholder="Linkdin account" />
                            </div>
                            <div className={classes['input-container']}>
                                <label htmlFor='facebook'>Facebook:</label>
                                <input type='text' id='facebook' placeholder="Facebook account" />
                            </div>
                        </div>
                        <div className={classes['btn-container']}>
                        <NavLink to={'/form-two'}
                        state={cv}>
                            <button onClick={this.handleNext.bind(this)} className={classes['next-btn']}>NEXT</button>
                        </NavLink>
                        </div>
                </div>
            </div>
        )
    }

}
const FormPage = ()  => {
            const location = useLocation();
            const temp = location.state;
            cv.templateName = temp;            
    

        return(
                   <FormOne />
        )
        
}

export default FormPage;