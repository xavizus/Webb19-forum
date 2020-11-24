import React, {useEffect, useState} from 'react';
import {isPromise} from '../../utilities/validators';

const InputField = ({onChangeFunction, value, placeholder, type, name, label, required, index, setValue, hideLabel}) => {

    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    function printInputType() {
        switch(type) {
            case 'password':
            case 'text': {
                return <input name={name} onChange={onChangeFunction} placeholder={placeholder} type={type} required={required} index={index}/>
            }
            case 'select': {
                return (
                    <select name={name} index={index} onChange={onChangeFunction}>
                        <option defaultValue value='0'>Choose</option>
                        {data && data.map((element, index) => {
                            return <option value={element.id} key={index}>{element.title}</option>
                        })}
                    </select>
                )
            }
            case 'textarea': {
                return (
                    <textarea name={name} index={index} onChange={onChangeFunction} placeholder={placeholder}>

                    </textarea>
                )
            }
        };
    }

    useEffect(async () => {
        if (isPromise(value)) {
            setData(await value);
            setIsLoaded(true);
        } else {
            setIsLoaded(true);
        }
    },[]);

    return (
        <>
            {isLoaded && (
                <div className={'inputGroup'}>
                    {label && !hideLabel && <label htmlFor={name}>{label}</label>}
                    {printInputType()}
                </div>
                )
            }

        </>
    );
};

export default InputField;
