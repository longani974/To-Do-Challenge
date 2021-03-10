import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoDatas, setTodoDatas] = useState([]);

    useEffect(() => {
        const localStorageTodo = JSON.parse(localStorage.getItem('todoList'));

        if (localStorageTodo && localStorageTodo.length > 0) {
            setTodoDatas(localStorageTodo);
        } else {
            setTodoDatas([
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
            ]);
        }
    }, []);

    const addTodo = (todo) => {
        const newDataList = [todo, ...todoDatas];
        setTodoDatas(newDataList);

        localStorage.setItem('todoList', JSON.stringify(newDataList));
    };

    const deleteTodo = (todoId) => {
        const newDataList = [...todoDatas].filter((data) => data.id !== todoId);
        setTodoDatas(newDataList);

        localStorage.setItem('todoList', JSON.stringify(newDataList));
    };

    const toggleCompleted = (todoId) => {
        const newDataList = [...todoDatas];
        const index = newDataList.findIndex((data) => data.id === todoId);
        newDataList[index].completed = !newDataList[index].completed;

        setTodoDatas(newDataList);

        localStorage.setItem('todoList', JSON.stringify(newDataList));
    };

    const deleteAllCompletedToDo = () => {
        const newDataList = [...todoDatas].filter((data) => !data.completed);

        setTodoDatas(newDataList);

        localStorage.setItem('todoList', JSON.stringify(newDataList));
    };

    return (
        <TodoContext.Provider
            value={{
                todoDatas,
                addTodo,
                deleteTodo,
                toggleCompleted,
                deleteAllCompletedToDo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
