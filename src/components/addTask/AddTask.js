import React, { useState } from 'react';
import CheckBox from '../checkBox/checkBox';
import * as styles from './addTask.module.css';

const AddTask = () => {
    const [disable, setDisable] = useState(true);
    const [isChecked, setisChecked] = useState(false);
    const [task, setTask] = useState('');

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

    const addTaskHandler = () => {
        if (!isChecked) return;
        console.log('Adding a task:', task);
        setTask('');
        setisChecked(false);
        setDisable(true);
    };

    return (
        <>
            <div className={styles.addTask}>
                <div className={styles.wrapper} onClick={addTaskHandler}>
                    <CheckBox
                        disabledCheckBox={disable}
                        isChecked={isChecked}
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
