import React from "react";
import classes from '../layout/templateExamples.module.css';

const TemplateExamplesPage = class extends React.Component {
    constructor(props) {
        super();
        
        this.state = {
            clicked: false,
            imgUrl: '',
            zoom: true,
            hide: false,
        }
    }

    openTemp(temp) {
        this.setState({clicked: true, imgUrl: temp.imageUrl},()=> {
        });
        
    }
    zoomFunc(e) {
        let cWidth = Number(e.target.offsetWidth);
        let cHeight = Number(e.target.offsetWidth);
        if(this.state.zoom === true) {
        this.setState({zoom: false}, () => {
            e.target.style.cursor = 'zoom-out';
            e.target.style.width = cWidth + 10 + 'px';
            e.target.style.width = cHeight + 150 + 'px';
        });
        }else{
        this.setState({zoom: true}, () => {
            e.target.style.cursor = 'zoom-in';
            e.target.style.width = cWidth - 10 + 'px';
            e.target.style.width = cHeight - 150 + 'px';
        });
        }
       
    }

    handleClose(e) {
        this.setState({clicked: false});
    }
    

    render() {
        const [templates] = Object.values(this.props);
        let {clicked, imgUrl} = this.state;
        return(
            <div className={classes.body}>
            <div>
                <div className={clicked === true ? classes.show: classes.hide}>
            <button className={classes['close-btn']} onClick={this.handleClose.bind(this)}>X</button>
                <div className={classes['full-img-container']}>
                    <img src={imgUrl} className={classes['full-img']} onClick={this.zoomFunc.bind(this)} />
                </div>
            </div>
            </div>                    
            <div className={classes['all-example-container']}>
            {templates.map(temp => 
                <div key={temp.title} className={classes['example-container']} onClick={this.openTemp.bind(this, temp)}>
                <div className={classes.text}>{temp.title}</div>
                <img src={temp.imageUrl} />
                </div>)}
                </div>
                </div>
        )
    }
}
export default TemplateExamplesPage;
