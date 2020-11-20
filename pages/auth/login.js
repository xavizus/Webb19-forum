import React from 'react';
import {loginForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";
import Link from "next/link";

const Login = () => {

    const form = loginForm();
    return (
        <div>
            <FormGenerator orderedForm={form}/>
            <Link href={'/auth/signup'}>SignUp</Link>
        </div>
    );
};

export default Login;
