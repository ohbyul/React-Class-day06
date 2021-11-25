import React, { useState } from 'react';
import Test5Animal from './Test5Animal';
import Test5Display from './Test5Display';
import Test5Name from './Test5Name';

const Test5 = () => {
    const [name , setName] = useState('홍길동')
    const [ani , setAni] = useState('고양이')
    
    const onName =(e)=>{
        const {value} = e.target
        setName(value);
    }
    const onAni =(e)=>{
        const {value} = e.target
        setAni(value);
    }
    
    return (
        <div>
            <Test5Name name={name} onName={onName}/>
            <hr />
            <Test5Animal ani={ani} onAni={onAni}/>
            <hr />
            <Test5Display name={name} ani={ani} />
        </div>
    );
};

export default Test5;