import React from 'react';
import Button from '../ButtonToggleDarkMode/ButtonToggleDarkMode';
import * as styles from './header.module.css';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <h1>Todo</h1>
            <Button lightOrDarkMode={props.lightOrDarkMode} />
        </div>
    );
};

export default Header;
