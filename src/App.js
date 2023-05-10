import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import DarkThemeSwitcher from './componets/DarkThemeSwitcher';
import MainMenu from './componets/MainMenu';
import CartWidget from './componets/CartWidget';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = item => {
    setCart([...cart, item]);
  };
  const setDarkTheme = (value) => {
    setCart([...cart, item]);
  };
  const [themeDark, setThemeDark] = useState(false);

  return (
    <div
      className={
        "p-2 min-h-screen " + (themeDark ? "dark bg-slate-950 text-white" : "")
      }
    >
      <div className="container mx-auto">
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />
        <MainMenu />
        <CartWidget cart={cart} />
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;