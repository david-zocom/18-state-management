import React, { useState } from 'react';
import ThemeContext from './contexts/ThemeContext'
import ThemedButton from './components/ThemedButton'
import CartItem from './components/CartItem'
import './App.css';

function App() {
    const [theme, setTheme] = useState('light')
    // För att ändra context finns 2 alternativ:
    // 1. skicka "toggleTheme" med props
    // 2. skicka "toggleTheme" med context
    //    { value: 'light', toggleTheme }

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

            <hr/>

            <CartItem name={'banana'} />
            <CartItem name={'apple'} />
            <CartItem name={'mango'} />
            <CartItem name={'lime'} />
            <CartItem name={'pear'} />
            <p>
                Number of items in cart: ???
            </p>
        </main>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
