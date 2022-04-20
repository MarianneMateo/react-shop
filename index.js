import React, { useState } from 'react';

const Button = () => {
    const [name, setName] = useState('Hola Mundo!');
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};