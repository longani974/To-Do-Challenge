import React, { useContext } from 'react';
import { active, all, completed } from '../../constant/constant';
import { TodoContext } from '../../contexts/TodoContext';
import * as styles from './sortTodoList.module.css';

const SortToDoList = () => {
    const { changeTodosToDisplay } = useContext(TodoContext);

    const clickHandler = (key) => {
        changeTodosToDisplay(key);
    };

    return (
        <div className={styles.sortToDoList}>
            <div onClick={() => clickHandler(all)}>All</div>
            <div onClick={() => clickHandler(active)}>Active</div>
            <div onClick={() => clickHandler(completed)}>Completed</div>
        </div>
    );
};

export default SortToDoList;
