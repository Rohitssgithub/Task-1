import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Crud.css';
import DisplayData from "./DisplayData";

const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    // .matches(
    //     "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    // ),
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
});


const Crud = () => {
    let [data, SetData] = useState([])
    let [ids, SetIds] = useState(0)
    let [update, SetUpdate] = useState(false)

    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            validateOnChange: true,
            validateOnBlur: true,
            onSubmit: (values, action) => {
                console.log(values);
                const newTodoItem = {
                    id: Date.now(),
                    name: values.name,
                    email: values.email,
                    password: values.password,
                };
                SetData([...data, newTodoItem])
                action.resetForm();
            },
        });



    const updateUser = (user) => {
        SetIds(user.id)
        SetUpdate(true)

        let filterdata = data.filter((ele) => {
            return ele.id == ids
        })
    }
    console.log(ids)
    console.log(data)


    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="row p-4 form-row justify-content-center">
                    <div className="input-block col-7 mb-4">
                        <label htmlFor="name" className="input-label mb-2">
                            Name
                        </label>
                        <input
                            type="name"
                            autoComplete="off"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                        />
                        {/* {touched.name && errors.name ? (
                            <i class="bi bi-exclamation-circle error-icon"></i>
                        ) : null} */}
                        {touched.name && errors.name ? (
                            <p className="form-error">{errors.name}</p>
                        ) : null}
                    </div>
                    <div className="input-block col-7 mb-4">
                        <label htmlFor="email" className="input-label  mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            autoComplete="off"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                        {errors.email && touched.email ? (
                            <p className="form-error">{errors.email}</p>
                        ) : null}
                    </div>
                    <div className="input-block col-7 mb-4">
                        <label htmlFor="password" className="input-label  mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
                        />
                        {errors.password && touched.password ? (
                            <p className="form-error">{errors.password}</p>
                        ) : null}
                    </div>
                    <div className="input-block col-7 mb-4">
                        <label htmlFor="confirm_password" className="input-label  mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            autoComplete="off"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirm Password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={'form-control' + (errors.confirm_password && touched.confirm_password ? ' is-invalid' : '')}
                        />
                        {errors.confirm_password && touched.confirm_password ? (
                            <p className="form-error">{errors.confirm_password}</p>
                        ) : null}
                    </div>
                    <div className="col-6 text-center">
                        <button className="btn btn-primary" type="submit">
                            Registration
                        </button>
                    </div>
                </form>
            </div>
            <DisplayData data={data} SetData={SetData} updateUser={updateUser}></DisplayData>

        </>
    );
};
export default Crud;