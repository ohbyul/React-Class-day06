import React, { useRef, useState } from 'react';

const Test3 = () => {
    const no = useRef(1);
    const idRef = useRef(null);

    const [data,setData] = useState([])
    //{ id:1,userid:xxx,userpw:xxx }
    const [form , setForm] = useState({
        userid : '' , userpw : '' 
    })
    const {userid ,userpw } = form;

    const changeInput = (e) => {
        const {value,name} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }
    const onAdd = (e) => {
        e.preventDefault();
        //제이쿼리 이벤트 새로고침 막는다.
        setData([
            ...data,
            {
                id: no.current++,
                userid,
                userpw
            }
            //userid : userid,키값이 같다면 하나만 적어도된다.
        ])
        setForm({
            userid:'',
            userpw : ''
        })
        idRef.current.focus()
    }

    return (
        <div>
            <form onSubmit={onAdd}>
                <input type = "text" value={userid} name= "userid" onChange = {changeInput} ref={idRef}/>
                <input type = "text" value={userpw} name= "userpw" onChange = {changeInput}/>
                <button type="submit" > 추가 </button>
            </form>
            <hr />
            <ul>
                {
                    data.map ( item => 
                        <li key={item.id}> {item.id} / {item.userid} / {item.userpw} </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Test3;