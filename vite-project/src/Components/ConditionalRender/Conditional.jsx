import React, { useState } from 'react'

const Conditional = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <h1>Conditional Rendering</h1>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleToggle} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
            </div>
            <div className={isOn ? 'onStatus' : 'offStatus'}>
                <p>{isOn ? 'Switch is ON' : 'Switch is OFF'}</p>
            </div>

        </>
    )
}

export default Conditional