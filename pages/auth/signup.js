import React, {useState} from 'react';
import {signUpForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import {clearMessage} from "../../utilities/messageHandler";


const SignUp = () => {

    const form = signUpForm();
    const [messageData, setMessageData] = useState(null);

    function onSubmit(data) {
        setMessageData({ message: 'Atleast something happend :D', messageType: 'info'});
        clearMessage(setMessageData);
        console.log(data);
    }
    return (
        <div>
            <FormGenerator orderedForm={form} submitEvent={onSubmit} message={messageData} setMessage={setMessageData}/>
        </div>
    );
};

export default SignUp;
