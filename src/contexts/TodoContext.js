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
        id: '1',
        todo: '1: Tap or click "Create a new todo..."',
        completed: false,
      },
      {
        id: '2',
        todo:
          '2: Enter a new task and tap or click the check button on the left.',
        completed: false,
      },
      {
        id: '3',
        todo: '3: Drag and drop to rearrange tasks.',
        completed: false,
      },
      {
        id: '4',
        todo: '4: Tap or click the circle when the task is complete.',
        completed: false,
      },
      {
        id: '5',
        todo: '5: Tap or click the cross to delete the task.',
        completed: false,
      },
      {
        id: '6',
        todo:
          '6 At the bottom: choose to display All, Active or Completed task.',
        completed: false,
      },
      {
        id: '7',
        todo:
          '7: Bottom right: Tap or click Clear Done to delete all completed tasks.',
        completed: false,
      },
      {
        id: '8',
        todo: '8: Click on the sun (or the moon) to change theme color.',
        completed: false,
      },
      {
        id: '9',
        todo: '9: Enjoy.',
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

  const reorderTodo = (todoList) => {
    const newDataList = todoList;

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
        keyDataToDisplay,
        addTodo,
        deleteTodo,
        toggleCompleted,
        deleteAllCompletedToDo,
        displayAllTodos,
        displayActiveTodos,
        displayCompletedTodos,
        changeTodosToDisplay,
        reorderTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
