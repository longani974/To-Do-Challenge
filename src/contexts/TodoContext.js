import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todoDatas, setTodoDatas] = useState([
        { id: 'fds', todo: '1Jog around the park 5x' },
        { id: 'fdqs', todo: '2Jog around the park 5x' },
        { id: 'fcds', todo: '3Jog around the park 5x' },
        { id: 'fdbs', todo: '4Jog around the park 5x' },
        { id: 'fdns', todo: '5Jog around the park 5x' },
    ]);

    const addTodo = (todo) => {
        setTodoDatas([todo, ...todoDatas]);
    };

    return (
        <TodoContext.Provider value={{ todoDatas, addTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
