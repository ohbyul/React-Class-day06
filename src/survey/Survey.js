import React from 'react';
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';
import './style.css'

//Day 06 - 07 연결해서 진행
const Survey = () => {
    return (
        <div className="wrap">
            {/* <SurveyStep1 /> */}
            {/* <SurveyStep2 /> */}
            <SurveyStep3 />
            {/* <SurveyStep4 /> */}
        </div>
    );
};

export default Survey; 