import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

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
            <Button lightOrDarkMode={lightOrDarkModeHandler} />
        </div>
    );
}

export default App;
