import React, { useContext, useState } from 'react';
import { TodoContext } from '../../contexts/TodoContext';
import Todo from '../todo/Todo';
import TodoFooter from '../todoFooter/TodoFooter';
import * as styles from './todoList.module.css';

const TodoList = () => {
    const [dragItem, setDragItem] = useState();
    const [isMobile, setIsMobile] = useState(false);
    const { datasToDisplay, todoDatas, reorderTodo } = useContext(TodoContext);

    const defineDragItem = (item) => {
        setDragItem(item);
    };

    const mobileOrDesktop = (ismobile) => {
        ismobile ? setIsMobile(true) : setIsMobile(false);
    };

    function findItemsId(event) {
        if (isMobile) {
            return findItemsIdMobile(event);
        }

        const dragItemId = dragItem.dataset.dragid;
        const itemToReplaceId = event.target.dataset.dragid;

        swapeItems(dragItemId, itemToReplaceId);
    }

    const swapeItems = (dragItemId, itemToReplaceId) => {
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
    };

    const findItemsIdMobile = (event) => {
        const items = [...document.getElementsByClassName('item')];
        const mousePositionY = event.targetTouches[0].clientY;

        const swapItem = nearestItem(items, mousePositionY);

        const dragItemId = dragItem.dataset.dragid;
        const itemToReplaceId = swapItem.dataset.dragid;

        swapeItems(dragItemId, itemToReplaceId);
    };

    function getItemPosition(item) {
        const boundingItem = item.getBoundingClientRect();
        const centerOfTheItemY = boundingItem.top + boundingItem.height / 2;
        return centerOfTheItemY;
    }

    function nearestItem(items, mousePositionY) {
        return items.reduce((acc, cur) => {
            const curItemPosition = getItemPosition(cur);
            const accItemPosition = getItemPosition(acc);

            const distance_curItem_mouse = Math.abs(
                curItemPosition - mousePositionY
            );
            const distance_accItem_mouse = Math.abs(
                accItemPosition - mousePositionY
            );

            acc = distance_curItem_mouse < distance_accItem_mouse ? cur : acc;

            return acc;
        });
    }

    return (
        <div className={styles.todoList}>
            {datasToDisplay.map((todoData) => (
                <Todo
                    id={todoData.id}
                    key={todoData.id}
                    todo={todoData.todo}
                    defineDragItem={defineDragItem}
                    findItemsId={findItemsId}
                    mobileOrDesktop={mobileOrDesktop}
                />
            ))}
            <TodoFooter />
        </div>
    );
};

export default TodoList;
