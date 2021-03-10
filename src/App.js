import { useEffect, useState } from 'react';
import TodoContextProvider from './contexts/TodoContext';
import './App.css';
import AddTask from './components/addTask/AddTask';
import Header from './components/Header/Header';
import TodoList from './components/todoList/TodoList';
import SortToDoList from './components/sortTodoList/SortToDoList';

function App() {
    const darkMode = 'dark';
    const lightMode = 'light';
    const [lightOrDark, setlightOrDark] = useState(lightMode);

    useEffect(() => {
        document.querySelector('body').className = lightOrDark;
    }, [lightOrDark]);

    const lightOrDarkModeHandler = () => {
        lightOrDark === lightMode
            ? setlightOrDark(darkMode)
            : setlightOrDark(lightMode);
    };

    return (
        <div className="App">
            <TodoContextProvider>
                <Header lightOrDarkMode={lightOrDarkModeHandler} />
                <AddTask />
                <TodoList />
                <SortToDoList />
            </TodoContextProvider>
        </div>
    );
}

export default App;
