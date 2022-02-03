import React from "react";
import classes from '../layout/tips.module.css';
import totalImage from '../resources/totaljops.webp';
import cvLibaryImage from '../resources/cv-libary.jpg';
import novorResumeImage from '../resources/novoresume.jpg';

const CollectionArticles = class extends React.Component {
    constructor() {
        super();
        this.articles = [
            {
                tittle: 'How to write a CV',
                from: 'cv-library',
                url: 'https://www.cv-library.co.uk/career-advice/cv/how-to-write-a-cv-tips/',
                id: 1,
                imageUrl: cvLibaryImage,
            },
            {
                tittle: '10 steps to a successful CV',
                from: 'total-jops',
                id:2,
                url: 'https://www.totaljobs.com/advice/successful-cv',
                imageUrl: totalImage,
            },
            {
                tittle: '23+ Top CV Tips & Tricks',
                from: 'novoresume',
                id:3,
                url: 'https://novoresume.com/career-blog/cv-tips-and-tricks',
                imageUrl: novorResumeImage,
            }
        ]
        this.state = {
            clicked: false
        }
    }

    goToArticleSite(dataUrl) {
        this.setState({clicked : true},
            () => window.open(dataUrl, '_blank'));
    }
    render() {
        return(
            <div className={classes['aricles-container']}>
            {this.articles.map((article) => {
                let dataUrl = article.url;
                return (
                    <div key={article.id} className={classes['aricles-card']} onClick={this.goToArticleSite.bind(this, dataUrl)}>
                        <div className={classes['aricles-title']}>{article.tittle}</div>
                        <div className={classes['aricles-image']}>
                        <img src={article.imageUrl} /></div>
                        <div className={classes['aricles-res']}>from : {article.from}</div>
                    </div>
                    );
            })}
            </div>
        )
    }
}

const TipsPage = class extends React.Component {
    render() {
        return(
            <div className={classes.body}>
                <div className={classes['first-text']}>
                Here you will find a collection of online articles,
                to help you find the tips you need.</div>
                 <CollectionArticles />
            </div>
            
        )
    }
}

export default TipsPage;