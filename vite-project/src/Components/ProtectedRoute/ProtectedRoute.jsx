import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
    // let [user, SetUser] = useState(false)
    if (!user) {
        return <Navigate to="/login" replace></Navigate>;
    }
    return children;

}

export default ProtectedRoute
