import React from 'react';
import ResponseItem from "./responseItem";

const ResponseList = ({responses}) => {

    return (
        <div>
            {responses && responses.map((item, index) => {
                return <ResponseItem {...item} key={index}/>
            })}
        </div>
    );
};

export default ResponseList;
