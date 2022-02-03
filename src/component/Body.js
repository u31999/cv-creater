import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import TipsPage from "../Pages/TipsPage";
import TemplateExamplesPage from "../Pages/TemplateExamples";
import FormPage from "../Pages/CvFormPage";
import ChooseTemplate from "../Pages/ChooseTemlate";
import whiteImage from '../resources/temp-example/white.jpg';
import blackImage from '../resources/temp-example/black.jpg';
import orangeImage from '../resources/temp-example/t2-orange.jpg';
import redImage from '../resources/temp-example/t3-red.jpg';
import blueImage from '../resources/temp-example/t5-blue.jpg';
import FormTwo from '../Pages/forms/FormTwo';
import FormThree from "../Pages/forms/formThree";
import FormFowr from "../Pages/forms/FormFowr";
import FormFive from "../Pages/FormFive";
import ResultPage from '../component/ResultPage';

const templates = [
    {
        title: 'White-Template',
        imageUrl: whiteImage
    },
    {
        title: 'Black-Template',
        imageUrl: blackImage,
    },
    {
        title: 'Orange-Template',
        imageUrl: orangeImage,
    },
    {
        title: 'Red-Template',
        imageUrl: redImage,
    },
    {
        title: 'Blue-Template',
        imageUrl: blueImage,
    }
]

const Body = class extends React.Component {
    render(){
        return (
            <Routes>
            <Route  path='/' element={<HomePage />} />
            <Route  path='/tips' element={<TipsPage />} /> 
            <Route  path='/template-examples' element={<TemplateExamplesPage props={templates} />} />
            <Route path='choose-template' element={<ChooseTemplate props={templates} />}></Route> 
            <Route path='/cv-form' element={<FormPage />} />
            <Route path='/form-two' element={<FormTwo />} />
            <Route path='/form-three' element={<FormThree />} />
            <Route path='/form-fowr' element={<FormFowr />}></Route>
            <Route path='/form-five' element={<FormFive />}></Route>
            <Route path='/result-page' element= {<ResultPage />}></Route>
            </Routes>
        )
    }
}

export default Body;