import React, {useEffect, useState} from 'react';
import {isPromise} from '../../utilities/validators';

const InputField = ({onChangeFunction, value, placeholder, type, name, label, required, index}) => {

    const [data, setData] = useState(null);

    function printInputType() {
        switch(type) {
            case 'password':
            case 'text': {
                return <input name={name} onChange={onChangeFunction} placeholder={placeholder} type={type} required={required} index={index}/>
            }
            case 'select': {
                return (
                    <select name={name} index={index} onChange={onChangeFunction}>
                        {data && data.map((element, index) => {
                            return <option value={element.id} key={index}>{element.title}</option>
                        })}
                    </select>
                )
            }
        }
    }

    useEffect(async () => {
        if (isPromise(value)) {
            setData(await value);
        } else {
            setData(true);
        }
    },[]);

    return (
        <>
            {data && (
                <>
                    {label && <label htmlFor={name}>{label}</label>}
                    {printInputType()}
                </>
                )
            }

        </>
    );
};

export default InputField;
