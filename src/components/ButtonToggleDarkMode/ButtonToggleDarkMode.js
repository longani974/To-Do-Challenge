import React from 'react';
import * as styles from './buttonToggleDarkMode.module.css';

const Button = (props) => {
    return (
        <button
            className={styles.btnToggle}
            onClick={props.lightOrDarkMode}
        ></button>
    );
};

export default Button;
