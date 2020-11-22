import React, {useState} from 'react';
import InputField from "./InputField";

const FormGenerator = ({orderedForm, submitEvent, message, setMessage}) => {

    const [formData, setFormData] = useState({});

    function onChangeHandler(event) {
        const elementIndex = event.target.getAttribute('index');
        const {isValid, required, label} = orderedForm.inputFields[elementIndex];
        const {value, name} = event.target;
        let validityMessage = '';
        if(typeof isValid === 'function' && !isValid(value)) {
            validityMessage = 'Invalid data provided';
        } else if(required && !value) {
            validityMessage = `${label} is needed!`;
        }
        setValidityMessage(validityMessage, event.target)
        setValue(name, value);
    }

    function setValidityMessage(message, target) {
        target.setCustomValidity(message);
    }

    function setValue(name, value) {
        let tempFormData = {...formData};
        tempFormData[name] = value;
        setFormData(tempFormData);
    }

    function getInvalidFormData() {
        const filtered = orderedForm.inputFields.filter((currentElement) => {
            if(
                typeof currentElement.isValid === 'function' &&
                currentElement.isValid(formData[currentElement.name])
            ) {
                   return false;
            }

            if(currentElement.required && formData[currentElement.name]) {
                return false;
            }
            return true;

        });
        const result = filtered.map(element => element.label);
        return result.length !== 0 ?  result : false ;
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        const errorValues = getInvalidFormData();
        if(errorValues) {
            setMessage({
                messageType: 'warning',
                message: `Missing information in the following fields: ${errorValues.join(', ')}`
            });
            return;
        }
        submitEvent(formData);
    }

    return (
        <form>
            {orderedForm.header &&  <h2>{orderedForm.header}</h2>}
            {orderedForm.imageURL && <img src={orderedForm.imageURL}/>}
            {orderedForm && orderedForm.inputFields.map((inputField, index) => {
                return <InputField {...inputField} onChangeFunction={onChangeHandler} key={index} index={index} />
            })}
            <button type={'submit'} onClick={onSubmitHandler}>{orderedForm.submitName}</button>
            {message &&
            <p>{message.message}</p>
            }
        </form>
    );
};

export default FormGenerator;
