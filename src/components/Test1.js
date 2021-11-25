import React, { useState } from 'react';


const Test1 = () => {
    const [isColor , setIsColor] =useState(false);
    const [age,setAge] = useState(20);

    const onToggle = () => {
        setIsColor(!isColor);
    }
    const onAge = () => {
        setAge(age+1);
    }
    
    return (
        <div className = {`wrap ${isColor ? 'pink' : 'yellow'}`}>
            {/* `(백틱) & ${} 사용법 */}
            <h2>backGround Color  : {isColor ? 'pink' : 'yellow'} </h2>
            <h2>나이 : {age} 살</h2>
            <p>
                <button onClick = {onToggle}>배경색 바꾸기</button>
                <button onClick = {onAge}>나이증가</button>
                <button onClick = {()=>setAge (age-1)}>나이감소</button>
            </p>
        </div>
    );
};

export default Test1;