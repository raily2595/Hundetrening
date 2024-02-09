// ColoredBox.js
import React from 'react';

const ColoredBox = ({ color }) => {
    const boxStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: color,
        border: '1px solid #000', // Optional: Legg til en grense for å gjøre boksen mer synlig
    };

    return <div style={boxStyle}></div>;
};

export default ColoredBox;