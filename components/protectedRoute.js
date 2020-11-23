import React from 'react';
import Router from 'next/router';
import UserKit from '../classes/userKit';
import Cookies from 'cookies';

function redirect(ctx) {
    if(ctx.res) {
        ctx.res.writeHead(302, {Location: '/auth/login'});
        ctx.res.end();
    } else {
        Router.push({
            pathname: '/auth/login',
            query: {
                oldPath: ctx.pathname
            }
        });
    }
}

function ProtectedRoute(WrappedComponent) {

    const component = ({...props}) => <WrappedComponent {...props} />;

    component.getInitialProps = async (context) => {
        let token = null;

        // Check if serverside
        if(context.res) {
            token = UserKit.getTokenServerSide(context);
        }
        // We are clientSide
        else {
            token = UserKit.getToken();
        }

        if(!UserKit.checkTokenValidity(token)) {
            redirect(context);
        }
        const response = await UserKit.getCurrentUser(token);
        const me = response.data;
        console.log(WrappedComponent)
        if(WrappedComponent.getInitialProps) {
            const props = await WrappedComponent.getInitialProps({...context, me, token});
            return {...props, me, token};
        }
        return {
            me,
            token
        }
    }
    return component;
}

export default ProtectedRoute;

