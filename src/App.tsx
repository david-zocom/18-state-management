import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext'
import ThemedButton from './components/ThemedButton'
import './App.css';

function App() {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={theme}>
        <div className="App">
        <header className="App-header">
            header
        </header>
        <main>
            <p> Theme is: {theme}. </p>
            <button onClick={toggleTheme}> Toggle theme </button>

            <ThemedButton />
            <ThemedButton />
        </main>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
