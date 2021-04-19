import { useEffect, useState } from 'react';
import TodoContextProvider from './contexts/TodoContext';
import './App.css';
import AddTask from './components/addTask/AddTask';
import Header from './components/Header/Header';
import TodoList from './components/todoList/TodoList';
import SortToDoList from './components/sortTodoList/SortToDoList';
import Footer from './components/footer/Footer';

function App() {
  const darkMode = 'dark';
  const lightMode = 'light';
  const [lightOrDark, setlightOrDark] = useState('');

  useEffect(() => {
    document.querySelector('body').className = lightOrDark;
  }, [lightOrDark]);

  useEffect(() => {
    if (localStorage.getItem('lightOrDarkMode')) {
      setlightOrDark(localStorage.getItem('lightOrDarkMode'));
    } else {
      setlightOrDark('dark');
    }
  }, []);

  const lightOrDarkModeHandler = () => {
    if (lightOrDark === lightMode) {
      changeDarkOrLightMode(darkMode);
    } else {
      changeDarkOrLightMode(lightMode);
    }
  };

  const changeDarkOrLightMode = (mode) => {
    setlightOrDark(mode);
    localStorage.setItem('lightOrDarkMode', mode);
  };

  return (
    <div className="App">
      <TodoContextProvider>
        <div className="wrapperApp">
          <Header lightOrDarkMode={lightOrDarkModeHandler} />
          <AddTask />
          <TodoList />
          <div className="sortToDoList">
            <SortToDoList />
          </div>
          <Footer />
        </div>
      </TodoContextProvider>
    </div>
  );
}

export default App;
