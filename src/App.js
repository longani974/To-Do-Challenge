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
    const [lightOrDark, setlightOrDark] = useState('');

    useEffect(() => {
        document.querySelector('body').className = lightOrDark;
    }, [lightOrDark]);

    useEffect(() => {
        setlightOrDark(localStorage.getItem('lightOrDarkMode'));
    }, []);

    const lightOrDarkModeHandler = () => {
        if (lightOrDark === lightMode) {
            setlightOrDark(darkMode);
            localStorage.setItem('lightOrDarkMode', darkMode);
        } else {
            setlightOrDark(lightMode);
            localStorage.setItem('lightOrDarkMode', lightMode);
        }
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
