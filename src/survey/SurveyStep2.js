import React from 'react';

const SurveyStep2 = () => {
    return (
        <>
            <p>
                <label>직업: </label>
                <input type="text" />
            </p>
            <p>
                <label>이메일: </label>
                <input type="text" />
            </p>
            <p>
                <label>성별: </label>
                <input type="text" />
            </p>
            <p>
                <label>관심분야: </label>
                <input type="text" />
            </p>
            <p>
                <button>이전</button>
                <button>다음</button>
            </p>
        </>
    );
};

export default SurveyStep2;