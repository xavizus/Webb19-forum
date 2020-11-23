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
        if(context.res) {
            const cookies = new Cookies(context.req, context.res);
            token = cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME);
            if(!token) token='NotFound';
        }

        if(!UserKit.checkTokenValidity(token)) {
            redirect(context);
        }
        const response = await UserKit.getCurrentUser(token);
        const me = response.data;
        return {
            me
        }
    }
    return component;
}

export default ProtectedRoute;

