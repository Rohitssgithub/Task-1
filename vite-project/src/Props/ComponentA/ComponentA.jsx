import React from 'react';
import Button from '../Button/Button';
import style from '../ComponentA/Component.module.css'

const ComponentA = () => {
    return (
        <>
            <div>ComponentA</div>
            <Button color={style.btns}></Button>
        </>
    )
}

export default ComponentA