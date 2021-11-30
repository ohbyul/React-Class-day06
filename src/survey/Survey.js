import React, { useState } from 'react';
import SurveyStep1 from './SurveyStep1';
import SurveyStep2 from './SurveyStep2';
import SurveyStep3 from './SurveyStep3';
import SurveyStep4 from './SurveyStep4';
import './style.css'

//Day 06 - 07 연결해서 진행
const Survey = () => {
    const [step , setStep] = useState(1);
    const [form , setForm] = useState({
        username : '',
        age : '',
        addr : '',
        tel : '',
        job : '',
        email : '',
        sex : '',
        interests : ''
    })
    const {username , age , addr , tel , job, email, sex , interests} = form;

    const changeInput = (e) => {
        const {value , name} = e.target;
        setForm({
            ...form ,
            [name] : value
        })
    }
    

    //다음
    const onNext = () => {
       setStep(step+1); 
    }
    //이전
    const onPrev = () => {
        setStep(step-1); 
    }
    return (
        <div className="wrap">
            {
                step === 1 && 
                <SurveyStep1 
                    changeInput ={changeInput}
                    form = {form}
                    onNext = {onNext}
                />
            }
               
                
            {
                 step === 2 &&
                 <SurveyStep2 
                    changeInput ={changeInput}
                    form = {form}
                    onNext = {onNext} onPrev={onPrev}
                /> 
            }

            {
                 step === 3 &&
                 <SurveyStep3 {...form}
                 onNext = {onNext} onPrev={onPrev} 
                //  form = {form}
                 /> 
            }

            {
                 step === 4 &&
                 <SurveyStep4  
                    form = {form}
                    onPrev={onPrev}
                 />
            }
             
        </div>
    );
};

export default Survey; 