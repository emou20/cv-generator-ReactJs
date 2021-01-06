import React from 'react';
import {Switch, Route } from 'react-router-dom';


import Home from "./Home";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Models from "./Models";
import GeneratePDF from "./GeneratePDF";
import Jspdf from "./Jspdf";
import NotFoundPage from './NotFoundPage';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/step1" component={Step1} />
        <Route exact path="/step2" component={Step2} />
        <Route exact path="/step3" component={Step3} />
        <Route exact path="/step4" component={Step4} />
        <Route exact path="/step5" component={Step5} />
        <Route exact path="/pdf" component={GeneratePDF} />
        <Route exact path="/jspdf" component={Jspdf} />
        <Route exact path="/models" component={Models} />
        <Route component={NotFoundPage} />

    </Switch>
)

export default Router;