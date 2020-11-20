import React, {Component} from 'react';
import Router from 'next/router';

function ProtectedRoute(WrappedComponent) {
    return class extends Component {

        static getInitialProps(ctx) {
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

            return {
                    auth: true
            };
        }
        render() {
            return <WrappedComponent {...this.props}/>;
        }
    }
}

export default ProtectedRoute;
