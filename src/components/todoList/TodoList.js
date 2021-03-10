import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Todo from '../todo/Todo';
import TodoFooter from '../todoFooter/TodoFooter';
import * as styles from './todoList.module.css';

const TodoList = () => {
    const { todoDatas } = useContext(TodoContext);

    return (
        <div className={styles.todoList}>
            {todoDatas.map((todoData) => (
                <Todo id={todoData.id} key={todoData.id} todo={todoData.todo} />
            ))}
            <TodoFooter />
        </div>
    );
};

export default TodoList;
