import React, {useState} from 'react';
import {signUpForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";

const SignUp = () => {

    const form = signUpForm();

    const [message, setMessage] = useState(null);

    function clearMessageAfterSeconds(seconds=10) {
        setTimeout(() => {
            setMessage(null);
        }, seconds*1000);
    }

    function onSubmit(data) {
        setMessage('Something happened at least! :D')
        clearMessageAfterSeconds();
    }
    return (
        <div>
            <FormGenerator orderedForm={form} submitEvent={onSubmit} message={message}/>
        </div>
    );
};

export default SignUp;
