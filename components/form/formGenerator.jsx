import React, {useState} from 'react';
import InputField from "./InputField";
import {StyledForm} from "./formGenerator.styles";
import {Button, InfoBox} from "../../styles/main";

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
        setValidityMessage(validityMessage, event.target);
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
            } else if(currentElement.required && !currentElement.isValid && formData[currentElement.name]) {
                return false;
            }
            return true;

        });
        const result = filtered.map(element => `<strong>${element.label}</strong>`);
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

    /**
     * Messagebox opens up for vulnerabilities, because it renders raw html. (Though, this is not a concern in this application!).
     */
    return (
        <StyledForm>
            {orderedForm.header &&  <h1>{orderedForm.header}</h1>}
            {orderedForm.imageURL && <img src={orderedForm.imageURL}/>}
            {orderedForm && orderedForm.inputFields.map((inputField, index) => {
                return <InputField {...inputField} onChangeFunction={onChangeHandler} key={index} index={index} />
            })}
            {message &&
                <InfoBox type={message.messageType}>
                    <p dangerouslySetInnerHTML={{__html: message.message}}></p>
                </InfoBox>
            }
            <Button type={'submit'} className={'left'} onClick={onSubmitHandler}>{orderedForm.submitName}</Button>
        </StyledForm>
    );
};

export default FormGenerator;
