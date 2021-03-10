import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import CheckBox from '../checkBox/checkBox';
import * as styles from './addTask.module.css';

const AddTask = () => {
    const [disable, setDisable] = useState(true);
    const [isChecked, setisChecked] = useState(false);
    const [task, setTask] = useState('');

    const { addTodo } = useContext(TodoContext);

    const tapTextHandler = (e) => {
        const tapedText = e.target.value;

        setTask(tapedText);

        if (tapedText !== '') {
            setDisable(false);
            setisChecked(true);
        } else {
            setDisable(true);
            setisChecked(false);
        }
    };

    const clickHandler = (e) => {
        e.stopPropagation();
        if (!isChecked) return;

        const todo = { id: Math.random(), todo: task, completed: false };
        addTodo(todo);

        setTask('');
        setisChecked(false);
        setDisable(true);
    };

    // const addToDo = () => {
    //     console.log('Adding a task:', task);
    // };

    return (
        <>
            <div className={styles.addTask}>
                <div className={styles.wrapper} onClick={clickHandler}>
                    <CheckBox
                        disabledCheckBox={disable}
                        isChecked={isChecked}
                        id="newtodo"
                    />
                </div>

                <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Create a new todo…"
                    onChange={tapTextHandler}
                    value={task}
                />
            </div>
        </>
    );
};

export default AddTask;
