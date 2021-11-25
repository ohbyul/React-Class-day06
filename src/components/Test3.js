import React, { useRef, useState } from 'react';

const Test3 = () => {
    const nameRef = useRef()
 
    const [form , setForm] = useState({
        userName : '',
        userPW : '' , 
        userAge : ''
    })
    //비구조 할당
    const {userName , userPW , userAge } = form;

    const changeInput1 = (e) => {
        const {value , name} = e.target
        setForm({
            ...form,
            // ...은 그대로 가져온다?
            [name] : value
            //키 값
        })
    }

    const onReset = () => {
        nameRef.current.focus()
    }

    return (
        <div>
            <input type="text" ref={nameRef} onChange = {changeInput1} value = {userName} name="userName" />
            <input type="text" onChange = {changeInput1} value = {userPW} name="userPW"/>
            <input type="text" onChange = {changeInput1} value = {userAge} name="userAge"/>
            <button onClick = {onReset} >초기화</button>

            <hr />
            <h4>이름 : {userName}</h4>
            <h4>비번 : {userPW}</h4>
            <h4>나이 : {userAge}</h4>
        </div>
    );
};

export default Test3;