import React from 'react';
import * as styles from './todoFooter.module.css';

const TodoFooter = () => {
    return (
        <div className={styles.todoFooter}>
            <p>5 items left</p>
            <p>Clear Completed</p>
        </div>
    );
};

export default TodoFooter;
