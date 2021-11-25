import React, { useState } from 'react';

const Test2 = () => {
    const [userID , setUserID] = useState('');
    const [userPW , setUserPW] = useState('');

    const onSubmit = () => {

    }
    const changeInput1 = (e) => {
        setUserID(e.target.value);
    }
    const changeInput2 = (e) => {
        setUserPW(e.target.value);
    }

    
    return (
        <div>
            <input type="text" value = {userID} onChange = {changeInput1}/>
            <input type="text" value = {userPW} onChange = {changeInput2}/>
            <button disabled={userPW.length <7 }>전송1</button>
            {
                userPW.length > 6 ? <button>전송2</button>
                : <button disabled>전송2</button>
            }
            {/* 두번째 버튼 에러 */}
        </div>
    );
};

export default Test2;