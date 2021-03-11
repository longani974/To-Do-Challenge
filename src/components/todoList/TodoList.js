import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Todo from '../todo/Todo';
import TodoFooter from '../todoFooter/TodoFooter';
import * as styles from './todoList.module.css';

const TodoList = () => {
    const [dragItem, setDragItem] = useState();
    const { datasToDisplay, todoDatas, reorderTodo } = useContext(TodoContext);

    const defineDragItem = (item) => {
        setDragItem(item);
    };

    function swapeItems(event) {
        const dragItemId = dragItem.dataset.dragid;
        const itemToReplaceId = event.target.dataset.dragid;

        if (dragItemId === itemToReplaceId) return;

        const allItems = [...todoDatas];

        const indexDragItem = allItems.findIndex(
            (item) => item.id === parseFloat(dragItemId)
        );

        const indexItemToReplace = allItems.findIndex(
            (item) => item.id === parseFloat(itemToReplaceId)
        );

        if (indexDragItem === -1 || indexItemToReplace === -1) return;

        const newTodoList = [...todoDatas];

        // [a[3], a[4]] = [a[4], a[3]]
        [newTodoList[indexDragItem], newTodoList[indexItemToReplace]] = [
            newTodoList[indexItemToReplace],
            newTodoList[indexDragItem],
        ];
        reorderTodo(newTodoList);
    }

    return (
        <div className={styles.todoList}>
            {datasToDisplay.map((todoData) => (
                <Todo
                    id={todoData.id}
                    key={todoData.id}
                    todo={todoData.todo}
                    defineDragItem={defineDragItem}
                    swapeItems={swapeItems}
                />
            ))}
            <TodoFooter />
        </div>
    );
};

export default TodoList;
