import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoDatas, setTodoDatas] = useState([]);

    useEffect(() => {
        const localStorageTodo = JSON.parse(localStorage.getItem('todoList'));
        console.log(localStorageTodo.length);
        if (localStorageTodo.length > 0) {
            setTodoDatas(localStorageTodo);
        } else {
            setTodoDatas([
                { id: 'fds', todo: '1Jog around the park 5x' },
                { id: 'fdqs', todo: '2Jog around the park 5x' },
                { id: 'fcds', todo: '3Jog around the park 5x' },
                { id: 'fdbs', todo: '4Jog around the park 5x' },
                { id: 'fdns', todo: '5Jog around the park 5x' },
            ]);
        }
    }, []);

    const addTodo = (todo) => {
        const newDataList = [todo, ...todoDatas];
        setTodoDatas(newDataList);
        localStorage.setItem('todoList', JSON.stringify(newDataList));
        // console.log(JSON.parse(localStorage.getItem('todoList')));
    };

    const deleteTodo = (todoId) => {
        const newDataList = [...todoDatas].filter((data) => data.id !== todoId);
        setTodoDatas(newDataList);
        localStorage.setItem('todoList', JSON.stringify(newDataList));
        // console.log(JSON.parse(localStorage.getItem('todoList')));
    };

    return (
        <TodoContext.Provider value={{ todoDatas, addTodo, deleteTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
