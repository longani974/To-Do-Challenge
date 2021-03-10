import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import * as styles from './todoFooter.module.css';

const TodoFooter = () => {
    const { todoDatas, deleteAllCompletedToDo } = useContext(TodoContext);

    const nbOfItems = todoDatas.length;
    const itemOrItems = nbOfItems.length <= 1 ? 'item' : 'items';

    return (
        <div className={styles.todoFooter}>
            <p>
                {nbOfItems} {itemOrItems} left
            </p>
            <p
                onClick={deleteAllCompletedToDo}
                className={styles.clearCompleted}
            >
                Clear Completed
            </p>
        </div>
    );
};

export default TodoFooter;
