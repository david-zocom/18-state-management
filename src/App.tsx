import { useState } from 'react';
import ThemeContext from './contexts/ThemeContext'
import ThemedButton from './components/ThemedButton'
import CartItem from './components/CartItem'
import { useRecoilState } from 'recoil'
import cartAtom from './atoms/cart'
import './App.css';
import UserStatus from './components/UserStatus'
import ProductList from './components/ProductList'
import ViewCart from './components/ViewCart'

function App() {
    const [theme, setTheme] = useState('light')
    const [cartCount/*, setCartCount*/] = useRecoilState(cartAtom)
    const [view, setView] = useState('context')

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
            <button onClick={() => setView('context')}> Context </button>
            <button onClick={() => setView('recoil')}> Recoil </button>
            <button onClick={() => setView('redux')}> Redux </button>
        </header>
        <main>
        {view === 'context' ? (
            <>
            <p> Theme is: {theme}. </p>
            <button onClick={toggleTheme}> Toggle theme </button>

            <ThemedButton />
            <ThemedButton />
            </>
        ) : null}

        {view === 'recoil' ? (
            <>
            <CartItem name={'banana'} />
            <CartItem name={'apple'} />
            <CartItem name={'mango'} />
            <CartItem name={'lime'} />
            <CartItem name={'pear'} />
            <p>
                Number of items in cart: {cartCount}.
            </p>
            </>
        ) : null}

        {view === 'redux' ? (
            <>
            <UserStatus />
            <ProductList />
            <ViewCart />
            </>
        ) : null}

        </main>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
