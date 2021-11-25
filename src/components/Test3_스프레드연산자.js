import React, { useRef, useState } from 'react';

const Test3 = () => {
    const nameRef = useRef()
    const [userName , setUserName] = useState('')
    const [userPW , setUserPW] = useState('')
    const [userAge , setUserAge] = useState('')
    
    const [form , setForm] = useState({
        userName : '',
        userPW : '' , 
        userAge : ''
    })
    //form 스프레드 연산자 ...안에 있는거 그대로 들고오는 연산자
    const changeInput1 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userName : value
        })
    }
    const changeInput2 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userPW : value
        })
    }
    const changeInput3 = (e) => {
        const {value} = e.target
        setForm({
            ...form,
            userAge : value
        })
    }
    const onReset = () => {
        nameRef.current.focus()
    }
    return (
        <div>
            <input type="text" ref={nameRef} onChange = {changeInput1} value = {form.userName} />
            <input type="text" onChange = {changeInput2} value = {form.userPW}/>
            <input type="text" onChange = {changeInput3} value = {form.userAge}/>
            <button onClick = {onReset} >초기화</button>

            <hr />
            <h4>이름 : {form.userName}</h4>
            <h4>비번 : {form.userPW}</h4>
            <h4>나이 : {form.userAge}</h4>
        </div>
    );
};

export default Test3;