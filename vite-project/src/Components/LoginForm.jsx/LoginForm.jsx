import React, { useRef } from 'react';

const LoginForm = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        alert(`Login submitted with email: ${email} and password: ${password}`);
    };

    return (
        <div className="login-form">
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" ref={emailRef} />
                <label>Password :</label>
                <input type="password" ref={passwordRef} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
