import {isEmail, isSecurePassword} from "../../utilities/validators";
import PostKit from "../../classes/postKit";

export function loginForm() {
    return {
        submitName: 'Login',
        header: "Login",
        imageURL: '',
        invalidMessage: 'You entered wrong username or password',
        validMessage: 'Login in, please wait...',
        inputFields: [
            {
                type: 'text',
                name: 'email',
                label: 'E-mail',
                placeholder: 'E-mail',
                required: true,
                isValid: isEmail
            },
            {
                type: 'password',
                name: 'password',
                label: 'Password',
                required: true,
                placeholder: 'Your password',
                isValid: isSecurePassword
            }
        ]
    }
}

export function signUpForm() {
    return {
        submitName: 'Submit',
        invalidMessage: 'Something went wrong, plox try again',
        validMessage: 'Succeeded. Redirecting to login page',
        inputFields: [
            {
                type: 'text',
                name: 'firstname',
                label: 'Firstname',
                required: true,
                placeholder: 'Enter your given name'
            },
            {
                type: 'text',
                name: 'lastname',
                label: 'Lastname',
                required: true,
                placeholder: 'Enter your surname'
            },
            {
                type: 'text',
                name: 'email',
                label: 'E-mail',
                required: true,
                isValid: isEmail,
                placeholder: "Enter your preferred email"
            },
            {
                type: 'password',
                name: 'password',
                label: 'Password',
                required: true,
                placeholder: "Enter your password",
                isValid: isSecurePassword
            },
            {
                type: 'select',
                name: 'country',
                label: 'Country',
                required: true,
                value: PostKit.getCountries()
            }
        ]
    }
}