import React, { useState } from 'react'
import './Form.css'

const SiginInForm = () => {
    // const [focused, setFocused] = useState(false);
    const [focused, setFocused] = useState(false);

    const [formErrors, setFormErrors] = useState({});
    console.log(focused)

    let [value, SetValue] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleOnChange = (e) => {
        SetValue({ ...value, [e.target.name]: e.target.value })
        setFormErrors(validate(value));
        // setFocused(true);

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(value));
        setFocused(true);
        console.log(value)
    }
    const handleFocus = (e) => {
        setFormErrors(validate(value));
        setFocused(true);

    };
    console.log(focused)

    const validate = (values) => {
        console.log(values)
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        }
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        }
        else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "confirm password is required";
        }
        return errors;
    };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' placeholder='username' value={value.username}
                    onChange={handleOnChange} onBlur={handleFocus} focused={focused.toString()} />
                <span>{formErrors.username}</span>
                <input type="email" name='email' placeholder='email'
                    value={value.email} onChange={handleOnChange}
                    onBlur={handleFocus} focused={focused.toString()} />
                <span>{formErrors.email}</span>
                <input type="password" name='password' placeholder='password'
                    value={value.password} onChange={handleOnChange}
                    onBlur={handleFocus} focused={focused.toString()} />
                <span>{formErrors.password}</span>

                <input type="confirmPassword" name='confirmPassword' placeholder='confirmPassword'
                    value={value.confirmPassword} onChange={handleOnChange}
                    onBlur={handleFocus} focused={focused.toString()} />
                <span>{formErrors.confirmPassword}</span>

                <button>Submit</button>

            </form>

        </>
    )
}

export default SiginInForm