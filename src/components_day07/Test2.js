import React, { useRef, useState } from 'react';

const Test2 = () => {
    const no = useRef(1);
    const [data,setData] = useState([]);
    const names = '전지현, 송혜교, 김태희, 고길동, 홍길동, 유수종, 강호동, 유재석, 이정재,이효리,강동원'.split(",");
    const onAdd = () => {
        //data 에 이름이 랜덤으로 출력하기 mdn : String 객체
        const ran = Math.floor(Math.random() * names.length);

        setData([
            ...data,
            {
                id :  no.current++,
                text : names[ ran ]
            }
        ])
    }
    return (
        <div>
            <h2> 고유번호처리</h2>
            <button onClick ={onAdd}>추가</button>
            <hr />
            {
                data.map ( item => 
                <p key={item.id}> {item.id} / {item.text} </p>    
                )
            }
        </div>
    );
};

export default Test2;