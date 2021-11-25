import React, { useState } from 'react';

const Name = () => {
    const [name , setName ] = useState('')

    return (
        <div>
            <label htmlFor="name">이름 : </label>
            <input type="text" id="name" value={name}
                onChange ={(e)=>setName(e.target.value)}
            />
            <span style={{margin : 15}}>{name}</span>
        </div>
    );
};

const Animal = ({ani, changeInput}) => {

    return (
        <div>
            <label htmlFor="ani">동물 : </label>
            <input type="text" id="ani" value={ani} onChange ={changeInput}/>
            <span style={{margin : 15}}>{ani}</span>
        </div>
    );
};

const Display = ({ani}) => {
    return (
        <div>
            <h2>내가 좋아하는 동물은 {ani} 입니다.</h2>
        </div>
    );
};

const Test4 = () => {
    // 부모 컴퍼넌트
    const [ani , setAni] = useState('고양이');
    const changeInput = (e) => {
        const {value} = e.target;
        setAni(value);
    }
    return (
        <div>
            <Name />
            <hr />
            <Animal ani={ani} changeInput={changeInput}/>
            {/* 앞에서 props명 뒤에 상태값 */}
            <hr />
            <Display ani={ani} />
        </div>
    );
};
export default Test4;