import React from 'react';

const Test5Display = ({name,ani}) => {
    return (
        <div>
            <h3>Test5Display 컴포넌트</h3>
            <h2> {name} 가 좋아하는 동물은 {ani} 입니다. </h2>
        </div>
    );
};

export default Test5Display;