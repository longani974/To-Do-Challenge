import React, { useContext, useState } from 'react';
import { active, all, completed } from '../../constant/constant';
import { TodoContext } from '../../contexts/TodoContext';
import * as styles from './sortTodoList.module.css';

const SortToDoList = () => {
    const [iselected, setIsSelected] = useState({
        all: true,
        active: false,
        completed: false,
    });
    const { changeTodosToDisplay } = useContext(TodoContext);

    const clickHandler = (key) => {
        changeTodosToDisplay(key);
        howIsSelected(key);
    };

    const howIsSelected = (key) => {
        switch (key) {
            case all:
                setIsSelected({
                    all: true,
                    active: false,
                    completed: false,
                });
                break;
            case active:
                setIsSelected({
                    all: false,
                    active: true,
                    completed: false,
                });
                break;
            case completed:
                setIsSelected({
                    all: false,
                    active: false,
                    completed: true,
                });
                break;
            default:
                console.error('wrong key');
        }
    };

    return (
        <div className={styles.sortToDoList}>
            <div
                className={iselected.all ? styles.selected : ''}
                onClick={() => clickHandler(all)}
            >
                All
            </div>
            <div
                className={iselected.active ? styles.selected : ''}
                onClick={() => clickHandler(active)}
            >
                Active
            </div>
            <div
                className={iselected.completed ? styles.selected : ''}
                onClick={() => clickHandler(completed)}
            >
                Completed
            </div>
        </div>
    );
};

export default SortToDoList;
