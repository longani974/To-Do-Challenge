import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import CheckBox from '../checkBox/checkBox';
import * as styles from './todo.module.css';

const Todo = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [classCompleted, setClassCompleted] = useState(false);
    const { todoDatas, deleteTodo, toggleCompleted } = useContext(TodoContext);

    useEffect(() => {
        const dataList = [...todoDatas];
        const index = dataList.findIndex((data) => data.id === props.id);
        setIsChecked(dataList[index].completed);

        dataList[index].completed
            ? setClassCompleted(true)
            : setClassCompleted(false);
    }, [props.id, todoDatas]);

    const clickHandler = () => {
        toggleCompleted(props.id);
    };

    return (
        <div className={styles.todo}>
            <div style={{ display: 'flex' }} onMouseUp={clickHandler}>
                <CheckBox id={props.id} isChecked={isChecked} />
            </div>
            <p className={classCompleted ? styles.completed : ''}>
                {props.todo}
            </p>
            <div
                className={styles.cross}
                onClick={() => {
                    deleteTodo(props.id);
                }}
            ></div>
        </div>
    );
};

export default Todo;
