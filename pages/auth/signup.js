import React from 'react';
import {signUpForm} from "../../components/form/formsData";
import FormGenerator from "../../components/form/formGenerator";

const SignUp = () => {

    const form = signUpForm();
    return (
        <div>
            <FormGenerator orderedForm={form}/>
        </div>
    );
};

export default SignUp;
