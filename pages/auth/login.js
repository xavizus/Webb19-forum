import React, {useState} from 'react';
import {loginForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import Link from "next/link";
import {Credentials} from "../../classes/userStructs";
import UserKit from "../../classes/userKit";
import {clearMessage} from "../../utilities/messageHandler";
import Router from "next/router";

const Login = () => {

    const form = loginForm();

    const [messageData, setMessageData] = useState(null);

    async function onSubmit(data) {
        try {
            const userData = new Credentials(data.email, data.password);
            const result = await UserKit.login(userData);
            if(result.status !== 200) {
                console.error(result);
                throw new Error('Something went terrible wrong!');
            }
            setMessageData({message: 'Successfully logged in! You will be redirected in 2 seconds', messageType: 'info'});
            clearMessage(setMessageData, 2);
            setTimeout(() => {
                Router.push('/');
            }, 2*1000)
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
            <FormGenerator orderedForm={form} setMessage={setMessageData} submitEvent={onSubmit} message={messageData}/>
            <Link href={'/auth/signup'}>SignUp</Link>
        </div>
    );
};

export default Login;
