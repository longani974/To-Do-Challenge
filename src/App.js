import { useEffect, useState } from 'react';
import './App.css';
import AddTask from './components/addTask/AddTask';
import Header from './components/Header/Header';

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
            <Header lightOrDarkMode={lightOrDarkModeHandler} />
            <AddTask />
        </div>
    );
}

export default App;
