import React, {useContext} from 'react';
import Router from 'next/router';
import UserKit from '../classes/userKit';

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

        if(WrappedComponent.getInitialProps) {
            const props = await WrappedComponent.getInitialProps({...context,  token, auth: true});
            return {...props, token, auth: true};
        }
        return {
            token,
            auth: true
        }
    }
    return component;
}

export default ProtectedRoute;

