import { NavLink, useLocation } from "react-router-dom";
import { useEffect} from "react";
import classes from '../layout/form.module.css';

const FormFive = () => {
    const location = useLocation();
    let data = location.state;
    
    
    const addEducation =  () => {
        const chosseUnvirsity = (unvirsityName, degree, startDate, endDate) => {
                    return {
                        unvirsityName : unvirsityName,
                        degree : degree,
                        startDate: startDate,
                        endDate: endDate
                    }
        };

        let unvirsityName, degree, startDate, endDate;

        const unvirsity = document.querySelector('#unvirsity').firstElementChild;
        unvirsity.childNodes.forEach(child => {
            if(child.className === `${classes['input-container']}`) {
                child.childNodes.forEach(ch => {
                    if(ch.nodeName === 'INPUT') {
                        if(ch.name === 'university') {
                            unvirsityName = ch.value;
                            ch.value = '';
                        }
                        if(ch.name === 'degree') {
                            degree = ch.value;
                            ch.value = '';
                        }
                        if(ch.name === 'start-date') {
                        startDate = ch.value;
                        ch.value = '';
                        }
                        if(ch.name === 'end-date') {
                            endDate = ch.value;
                            ch.value = '';
                        }
                    }
                })
            }
        });

        if(unvirsityName !== '' && unvirsityName !== undefined) {
            let theUnvirsity = chosseUnvirsity(unvirsityName, degree, startDate, endDate);
            data.unvirsitys.push(theUnvirsity);
        }

    }
    
    useEffect(() => {
        return data;
        
    }, [data]); 
    
    return(
        <div className={classes['show']} id='unvirsity'>
        <div>
            <div className={classes.title}>Education</div>
            <div className={classes['input-container']}>
            <label htmlFor="university">Unviresty or Institust: </label>
            <input type ='text' name="university" placeholder="Unoversity or Institution"></input>
            </div>
            <div className={classes['input-container']}>
                <label htmlFor="degree">Degree: </label>
                <input type='text' name='degree' placeholder='The degree'></input>
            </div>
            <div className={classes['input-container']}>
                <label htmlFor="start-date">Start Date: </label>
                <input type='date' name="start-date" placeholder="Satrt date"></input>
            </div>
            <div className={classes['input-container']}>
            <label htmlFor="end-date">Finshed Date: </label>
            <input type='date' name="end-date" placeholder="Finshed date"></input>
            </div>
            </div>
            <div className={classes['btn-container']}>
                <button className={classes['next-btn']} onClick={addEducation}>Add</button>
            </div>
            <div className={classes['btn-container']}>
            <NavLink to='/result-page' state={data}>
                <button className={classes['next-btn']}>Next</button>
                </NavLink>
            </div>
        </div>
    )
}
export default FormFive;