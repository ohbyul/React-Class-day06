import React from 'react';

const SurveyStep1 = () => {
    return (
        <>
            <p>
                <label>이름: </label>
                <input type="text" />
            </p>
            <p>
                <label>나이: </label>
                <input type="text" />
            </p>
            <p>
                <label>주소: </label>
                <input type="text" />
            </p>
            <p>
                <label>연락처: </label>
                <input type="text" />
            </p>
            <p>
                <button>다음</button>
            </p>
        </>
    );
};

export default SurveyStep1;