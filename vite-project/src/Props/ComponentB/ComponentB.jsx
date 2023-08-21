import React from 'react'
import Button from '../Button/Button';
import style from '../ComponentB/ComponentB.module.css'
const ComponentB = () => {
    return (
        <>
            <div>ComponentB</div>
            <Button color={style.btn}></Button>
        </>
    )
}

export default ComponentB