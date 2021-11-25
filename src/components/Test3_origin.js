import React, { useRef, useState } from 'react';

const Test3 = () => {
    const nameRef = useRef()
    const [userName , setUserName] = useState('')
    const [userPW , setUserPW] = useState('')
    const [userAge , setUserAge] = useState('')
    
    const changeInput1 = (e) => {
        const {value} = e.target
        setUserName(value)
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setUserPW(value)
    }
    const changeInput3 = (e) => {
        const {value} = e.target
        setUserAge(value)
    }
    const onReset = () => {
        setUserName('')
        setUserPW('')
        setUserAge('')
        nameRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={nameRef} onChange = {changeInput1} value = {userName} />
            <input type="text" onChange = {changeInput2} value = {userPW}/>
            <input type="text" onChange = {changeInput3} value = {userAge}/>
            <button onClick = {onReset} >초기화</button>

            <hr />
            <h4>이름 : {userName}</h4>
            <h4>비번 : {userPW}</h4>
            <h4>나이 : {userAge}</h4>
        </div>
    );
};

export default Test3;