import React from 'react';

const Test5Animal = ({ani,onAni}) => {
    return (
        <div>
            <h3>Test5Animal 컴포넌트</h3>
            <label>좋아하는 동물 :</label>
            <input type="text" value={ani} onChange={onAni}/>
            <span style ={{marginLeft :10 }}>{ani}</span>
        </div>
    );
};

export default Test5Animal;