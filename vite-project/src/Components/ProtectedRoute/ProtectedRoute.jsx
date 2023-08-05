import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
    // let [user, SetUser] = useState(false)
    if (!user) {
        return <Navigate to="/login" replace></Navigate>;
    }
    return children;
    // let user = true
    // return (
    //     user ? <Outlet /> : <Navigate to='login' />
    // )

}

export default ProtectedRoute
