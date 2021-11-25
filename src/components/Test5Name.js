import React from 'react';

const Test5Name = ({name ,onName}) => {
    return (
        <div>
            <h3>Test5Name 컴포넌트</h3>
            <label>이름 :</label>
            <input type="text" value={name} onChange = {onName}/>
            <span style ={{marginLeft :10 }}>{name}</span>
        </div>
    );
};

export default Test5Name;