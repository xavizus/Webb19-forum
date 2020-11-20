import React, {useState} from 'react';
import InputField from "./InputField";

const FormGenerator = ({orderedForm}) => {

    const [formData, setFormData] = useState({});

    function onChangeHandler(event) {
        const elementIndex = event.target.getAttribute('index');
        const isValid = orderedForm.inputFields[elementIndex].isValid;
        const {value, name} = event.target;
        if(typeof isValid === 'function') {
            console.log(isValid(value) ? 'valid' : 'not valid');
        }
        let tempFormData = {...formData};
        tempFormData[name] = value;
        setFormData(tempFormData);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
    }

    return (
        <form>
            {orderedForm.header &&  <h2>{orderedForm.header}</h2>}
            {orderedForm.imageURL && <img src={orderedForm.imageURL}/>}
            {orderedForm && orderedForm.inputFields.map((inputField, index) => {
                return <InputField {...inputField} onChangeFunction={onChangeHandler} key={index} index={index}/>
            })}

            <button type={'submit'} onClick={onSubmitHandler}>{orderedForm.submitName}</button>
        </form>
    );
};

export default FormGenerator;
