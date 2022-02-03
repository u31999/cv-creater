import React from 'react';
import classesOne from '../layout/templateExamples.module.css';
import { NavLink } from 'react-router-dom';


const ShowBtn = class extends React.Component {
    constructor(props) {
        super()
        this.state = {
            clicked: true,
        }
        this.showClick = this.showClick.bind(this);
    }
    showClick(e) {
        this.setState({clicked: true}, () => {
            let target;
            let zoom = true;
            e.target.parentElement.parentElement.childNodes.forEach(el => {
                el.childNodes.forEach(c => {
                    if(c.nodeName === 'IMG') target = c.src;
                    
                })
            });
            const imgContainer = document.createElement('div');
            const closeBtn = document.createElement('button');
            const fullImgContainer = document.createElement('div');
            const img = document.createElement('img');

            document.body.append(imgContainer);
            imgContainer.append(closeBtn);
            imgContainer.append(fullImgContainer);
            fullImgContainer.append(img);

            imgContainer.className = `${classesOne.show}`;
            closeBtn.className = `${classesOne['close-btn']}`;
            fullImgContainer.className = `${classesOne['full-img-container']}`;
            img.className = `${classesOne['full-img']}`;
            img.src = target;
            closeBtn.innerText = 'X';

            closeBtn.addEventListener('click', () => {
                imgContainer.remove();
            });

            imgContainer.addEventListener('click', () => {
                let cWidth = Number(img.offsetWidth);
                let cHeight = Number(img.offsetWidth);
                if(zoom === true) {
                img.style.cursor = 'zoom-out';
                img.style.width = cWidth + 10 + 'px';
                img.style.width = cHeight + 150 + 'px';
                zoom = false;
                }else{
                    img.style.cursor = 'zoom-in';
                    img.style.width = cWidth - 10 + 'px';
                    img.style.width = cHeight - 150 + 'px';
                    zoom = true
                };
        });
            
        })
    }
   

    render() {
        return(
        <button className={classesOne['show-btn']} onClick={this.showClick}>SHOW</button>
            
        )
    }
}

const ChooseTemplate = class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            templateClick: false,
            choosenTemplate: '',
    }
    this.tempClick = this.tempClick.bind(this);
    }
    tempClick(e) {
        let target;
        this.setState({templateClick: true}, () => {
            if(e.target.classList.contains(`${classesOne['show-btn']}`)) return;
            if(e.target.classList.contains(classesOne['example-container'])){
                target = e.target;
            }else if(e.target.tagName === 'IMG'){
                target = e.target.parentElement.parentElement;
            }else{
                target = e.target.parentElement;
            }
            //work on sipling
            target.parentElement.childNodes.forEach(ch => {
                ch.childNodes.forEach(c => {
                    if(c.classList.contains(`${classesOne['show-btn-container']}`)){
                        c.className = classesOne.hide;
                    }
                })
            });

            //work on target
            target.childNodes.forEach(ch => {
                if(ch.classList.contains(`${classesOne.hide}`)) {
                    ch.className = classesOne['show-btn-container'];
                }
            });
            this.setState({choosenTemplate: target.id});
        });
        

    }
   
    render() {
        const templates = this.props.props;
        return(
            <div className={classesOne.body + ` ${classesOne['choose-temp-body']}`}>
            <div className={classesOne.info}>Choose Template</div>
            <div className={classesOne.info}>Note: the only available template is the orange-tmp,<br/>I ma working to add the remaining template soon</div>
            <div className={classesOne['error-box']}></div>
            <div className={classesOne['all-example-container']}>
                {templates.map(temp => 
                    <div key={temp.title} id ={temp.title}className={classesOne['example-container']+` ${classesOne['new-temp-eamp']}`}
                     onClick={this.tempClick}>
                        <div className={classesOne['hide']}>
                        <ShowBtn temp={this.props}/>
                        </div>
                        <div className={classesOne.text}>{temp.title}</div>
                        <div><img src={temp.imageUrl} alt='template img' /></div>
                    </div>
                )}
            </div>
            <div className={classesOne['next-btn-container']}>
                <NavLink to={(this.state.choosenTemplate !== '') ? 
                {pathname:'/cv-form'} : '/choose-template'} 
                state={{temp: this.state.choosenTemplate}}>
                    <button>Next</button>
                    </NavLink>
            </div>
           
            </div>
        )
    }
}

export default ChooseTemplate;