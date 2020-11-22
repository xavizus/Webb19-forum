import {isEmail, isSecurePassword} from "../../utilities/validators";


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
                placeholder: 'Your password',
                isValid: function () {
                    return true;
                }
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
                value: new Promise(async(resolve, reject) => {
                    try {
                        if(sessionStorage.getItem('countries')) {
                            const result = JSON.parse(sessionStorage.getItem('countries'));
                            return resolve(result);
                        }
                        const URL = `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_API_COUNTRY_PATH}`;
                        const response = await fetch(URL).then(response => response.json());
                        sessionStorage.setItem('countries', JSON.stringify(response.results));
                        resolve(response.results);
                    } catch(error) {
                        reject(error);
                    }

                })
            }
        ]
    }
}