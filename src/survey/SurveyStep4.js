import React from 'react';

const SurveyStep4 = ({form, onPrev}) => {
    const {username , age , addr , tel , job, email, sex , interests} = form;
    return (
        <div>
            <h3>
                <span>{username}</span> 
                설문조사 감사합니다.
            </h3>
            <p>
                <button onClick = {onPrev} >이전</button>
            </p>
        </div>
    );
};

export default SurveyStep4;