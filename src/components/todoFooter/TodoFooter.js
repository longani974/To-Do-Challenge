import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import * as styles from './todoFooter.module.css';

const TodoFooter = () => {
    const [nbOfItems, setNbOfItems] = useState(0);
    const [itemOrItems, setItemorItems] = useState('item');

    const { todoDatas, deleteAllCompletedToDo } = useContext(TodoContext);

    useEffect(() => {
        setNbOfItems(todoDatas.length);
    }, [todoDatas.length]);

    useEffect(() => {
        setItemorItems(nbOfItems <= 1 ? 'item' : 'items');
    }, [nbOfItems]);

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
