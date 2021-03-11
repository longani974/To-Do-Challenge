import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import CheckBox from '../checkBox/checkBox';
import * as styles from './todo.module.css';

const Todo = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [classCompleted, setClassCompleted] = useState(false);
    const { todoDatas, deleteTodo, toggleCompleted } = useContext(TodoContext);
    const [disablePointer, setDisablePointer] = useState('');

    const [dragging, setDragging] = useState('');

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

    /* drag and drop */

    const itemDragStart = (event, bool) => {
        props.mobileOrDesktop(bool);
        setDragging('dragging');
        props.defineDragItem(event.target);
        // this.classList.add('dragging');
        // dragItem = this;
    };

    function itemDragEnd() {
        setDragging('');
        props.defineDragItem(null);
        // this.classList.remove('dragging');
        // dragItem = null;
    }

    function itemDragOver(event) {
        props.findItemsId(event);
        // setDisablePointer('disablePointer');
        // swapeItems(event);
    }

    function itemDragLeave(event) {
        setDisablePointer('');
    }

    return (
        <div
            draggable="true"
            onDragStart={(e) => itemDragStart(e, false)}
            onTouchStart={(e) => itemDragStart(e, true)}
            onDragEnd={itemDragEnd}
            onTouchEnd={itemDragEnd}
            onDragOver={itemDragOver}
            onTouchMove={itemDragOver}
            onDragLeave={itemDragLeave}
            className={`${styles.todo} ${styles[dragging]} ${styles[disablePointer]} item`}
            data-dragid={props.id}
        >
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
