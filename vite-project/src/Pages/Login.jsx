import React, { useEffect } from 'react'

const Login = ({ setuser, user }) => {
    const handlelogin = () => {
        setuser(true)
    }
    useEffect(() => {
        // console.log(user)
    }, [setuser])
    return (
        <>
            <button onClick={handlelogin}>{user ? 'logout' : 'login'}</button>
        </>

    )
}

export default Login