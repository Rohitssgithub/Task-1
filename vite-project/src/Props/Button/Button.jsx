import React from 'react';
import Style from '../Button/Button.module.css'

const Button = ({ color }) => {
    return (
        <button className={`${Style.btn} ${color}`}>click</button>
    )
}

export default Button