import React from 'react';
import './Input.css'

const Input = ({label, value, onChange, className}) => {
    return (
        <label className={'input'}>
            <span>
                {label}
            </span>
            <input className={className} onChange={onChange} type="text" value={value} />
        </label>
    );
};

export default Input;