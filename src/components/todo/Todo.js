import React, { useState } from 'react';
import CheckBox from '../checkBox/checkBox';
import * as styles from './todo.module.css';

const Todo = (props) => {
    const [isChecked, setIsChecked] = useState(false);

    const clickHandler = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={styles.todo}>
            <div style={{ display: 'flex' }} onMouseUp={clickHandler}>
                <CheckBox id={props.id} isChecked={isChecked} />
            </div>
            <p>{props.todo}</p>
            <div className={styles.cross}></div>
        </div>
    );
};

export default Todo;
