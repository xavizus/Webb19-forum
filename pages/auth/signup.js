import React, {useState} from 'react';
import {signUpForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import {clearMessage} from "../../utilities/messageHandler";
import Authentication from '../../classes/userKit';
import {UserKit} from "../../classes/userStructs";
import Router from "next/router";

const SignUp = () => {

    const form = signUpForm();
    const [messageData, setMessageData] = useState(null);

    async function onSubmit(data) {
        try {
            const userData = new UserKit(data.email, data.password, data.country, data.firstname, data.lastname);
            const result = await Authentication.createUser(userData);
            if(result.status !== 201) {
                console.error(result);
                throw new Error('Something went terrible wrong!');
            }
            setMessageData({message: 'Successfully created account! You will be redirected in 5 seconds', messageType: 'info'});
            clearMessage(setMessageData, 5);
            setTimeout(() => {
                Router.push('/auth/login');
            }, 5*1000)
        } catch (error) {
            if(error.response) {
                const responseData = error.response.data;
                const errorMessage = Object.entries(responseData).map(element => element[1]).join('<br/>');
                setMessageData({ message: `${errorMessage}`, messageType: 'error'});
                clearMessage(setMessageData);
            }

        }
    }
    return (
        <div>
            <FormGenerator orderedForm={form} submitEvent={onSubmit} message={messageData} setMessage={setMessageData}/>
        </div>
    );
};

export default SignUp;
