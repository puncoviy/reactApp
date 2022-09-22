import React from 'react';
import { useState } from 'react';

const Input = () => {
    const [value, setValue] = useState('TEXT IN INPUT')
    return (
        <div>
            <h2>{value}</h2>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)} />
        </div>
    );
}

export default Input;
