import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.lightOrDarkMode}>
            Dark or Light Mode Toggle
        </button>
    );
};

export default Button;
