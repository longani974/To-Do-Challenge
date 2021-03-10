import React, { createContext, useEffect, useState } from 'react';
import { active, all, completed } from '../constant/constant';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoDatas, setTodoDatas] = useState([]);
    const [datasToDisplay, setDatasToDisplay] = useState([]);
    const [keyDataToDisplay, setKeyDataToDisplay] = useState(all);

    useEffect(() => {
        const dafaultDatas = [
            {
                id: 'fds',
                todo: '1Jog around the park 5x',
                completed: false,
            },
            {
                id: 'fdqs',
                todo: '2Jog around the park 5x',
                completed: false,
            },
            {
                id: 'fcds',
                todo: '3Jog around the park 5x',
                completed: false,
            },
            {
                id: 'fdbs',
                todo: '4Jog around the park 5x',
                completed: false,
            },
            {
                id: 'fdns',
                todo: '5Jog around the park 5x',
                completed: false,
            },
        ];
        const localStorageTodo = JSON.parse(localStorage.getItem('todoList'));

        if (localStorageTodo && localStorageTodo.length > 0) {
            setTodoDatas(localStorageTodo);
            setDatasToDisplay(localStorageTodo);
        } else {
            setTodoDatas(dafaultDatas);

            setDatasToDisplay(dafaultDatas);
        }
    }, []);

    useEffect(() => {
        chooseTodosToDisplay(todoDatas);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [keyDataToDisplay, todoDatas]);

    const addTodo = (todo) => {
        const newDataList = [todo, ...todoDatas];

        newTodoDatasHandler(newDataList);
    };

    const deleteTodo = (todoId) => {
        const newDataList = [...todoDatas].filter((data) => data.id !== todoId);
        newTodoDatasHandler(newDataList);
    };

    const toggleCompleted = (todoId) => {
        const newDataList = [...todoDatas];
        const index = newDataList.findIndex((data) => data.id === todoId);
        newDataList[index].completed = !newDataList[index].completed;

        newTodoDatasHandler(newDataList);
    };

    const deleteAllCompletedToDo = () => {
        const newDataList = [...todoDatas].filter((data) => !data.completed);

        newTodoDatasHandler(newDataList);
    };

    const newTodoDatasHandler = (todoList) => {
        chooseTodosToDisplay(todoList);

        setTodoDatas(todoList);

        localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    const changeTodosToDisplay = (key) => {
        setKeyDataToDisplay(key);
    };

    const chooseTodosToDisplay = (todoList) => {
        switch (keyDataToDisplay) {
            case all:
                displayAllTodos(todoList);
                break;
            case active:
                displayActiveTodos(todoList);
                break;
            case completed:
                displayCompletedTodos(todoList);
                break;
            default:
                console.error('error with the key to choise what to display');
        }
    };

    const displayAllTodos = (todoList) => {
        setDatasToDisplay(todoList);
    };

    const displayActiveTodos = (todoList) => {
        const todosToDisplay = [...todoList].filter((data) => !data.completed);
        setDatasToDisplay(todosToDisplay);
    };

    const displayCompletedTodos = (todoList) => {
        const todosToDisplay = [...todoList].filter((data) => data.completed);
        setDatasToDisplay(todosToDisplay);
    };

    return (
        <TodoContext.Provider
            value={{
                datasToDisplay,
                todoDatas,
                addTodo,
                deleteTodo,
                toggleCompleted,
                deleteAllCompletedToDo,
                displayAllTodos,
                displayActiveTodos,
                displayCompletedTodos,
                changeTodosToDisplay,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
