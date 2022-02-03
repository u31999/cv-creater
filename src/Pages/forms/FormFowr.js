import {React} from "react";
import { useLocation, NavLink } from "react-router-dom";
import classes from '../../layout/form.module.css';


const FormFowr = () => {
    const location = useLocation();
    const data = location.state.data;
    const allOcaption = [];
    const company = [];


    const getOcaption = () => {
        const form = document.querySelector('#exprince-form');
        let oneOcaption = {
            ocaptionName: '',
            startDate: '',
            endDate: '',
        }
        
        form.childNodes.forEach(child => {
            child.childNodes.forEach(ch => {
                if(ch.className === `${classes['input-container']}`) {
                    ch.childNodes.forEach(c => {
                        if(c.nodeName === 'INPUT') {
                            if(c.name === 'ocaption') {
                                oneOcaption.ocaptionName = c.value;
                                c.value = '';
                            }else if(c.name === 'start-time') {
                                oneOcaption.startDate = c.value;
                                c.value = '';
                            }else if(c.name === 'end-time') {
                                oneOcaption.endDate = c.value;
                                c.value = '';
                            }
                        }
                    })
                }
            })
        })
        if(oneOcaption.ocaptionName !== '') {
            allOcaption.push(oneOcaption);
        }
        return allOcaption;
    }
    const addCompany = (e) =>{
        const form = document.querySelector('#exprince-form');
        let oneCompany = {}

        form.childNodes.forEach(child => {
            child.childNodes.forEach(ch => {
                if(ch.className === `${classes['input-container']}`) {
                    ch.childNodes.forEach(c => {
                        if(c.nodeName === 'INPUT') {
                            if(c.name === 'company-name') {
                                oneCompany.companyName = c.value;
                                c.value = '';
                                oneCompany.ocaption = getOcaption();
                            }
                        }
                    })
                }
            })
        });
        company.push(oneCompany);
    }
    const goNext = () => {
        data.exprinces.push(company);
    }

 return (
     <div className={classes['show']} id='exprince-form'>
 <div>
     <div className={classes.title}>Exprinces</div>
     <div className={classes['input-container']}>
         <label htmlFor="company-name">Company name? </label>
         <input type='text' placeholder='Company name' name="company-name"></input>
     </div>
     <div className={classes['input-container']}>
         <label htmlFor="ocaption">Occaption? </label>
         <input type='text' placeholder='ocaption' name="ocaption"></input>
     </div>
     <div className={classes['input-container']}>
     <label htmlFor="start-time">When did you start? </label>
     <input type='date' name='start-time'></input>
     </div>
     <div className={classes['input-container']}>
     <label htmlFor='end-time'>When did you end this position?</label>
     <input type='date' name='end-time'></input>
     </div>
 </div>
 <div className={classes['btn-container']}>
    <button className={classes['next-btn']} onClick={addCompany}>add</button>
    <button className={classes['next-btn']} onClick={getOcaption}>add another ocuption</button>
 </div>
 <div className={classes['btn-container']}>
     <NavLink to='/form-five' state={data}>
        <button className={classes['next-btn']} onClick={goNext}>Next</button>
     </NavLink>
 </div>
 </div>
 )   
}

export default FormFowr;