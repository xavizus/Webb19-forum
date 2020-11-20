import React from 'react';
import ProtectedRoute from '../../components/protectedRoute';

const Index = ({auth}) => {
    return (
        <div>
            {console.log(auth)}
        </div>
    );
};

export default ProtectedRoute(Index);
