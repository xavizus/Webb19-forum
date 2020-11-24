import React, {useState} from 'react';
import {loginForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import Link from "next/link";
import {Credentials} from "../../classes/structs";
import UserKit from "../../classes/userKit";
import {clearMessage} from "../../utilities/miscellaneous";
import Router from "next/router";
import {LoginBoxContent} from "./login.styles";
import {CenteredBoxFrame, CenteredBoxMiddle} from "../../styles/centeredBox";
import {Button} from "../../styles/main";

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
                setMessageData({ message: `${errorMessage}`, messageType: 'danger'});
                clearMessage(setMessageData);
            }

        }
    }

    return (
        <CenteredBoxFrame>
            <CenteredBoxMiddle>
                <LoginBoxContent>
                    <FormGenerator orderedForm={form} setMessage={setMessageData} submitEvent={onSubmit} message={messageData}/>
                    <Link href={'/auth/signup'}>
                        <Button className={'right'}>Register</Button>
                    </Link>
                </LoginBoxContent>
            </CenteredBoxMiddle>
        </CenteredBoxFrame>
    );
};

export default Login;
