import "./App.css";
import { useState } from "react";
import CartWidget from "./components/CartWidget";
import DarkThemeSwitcher from "./components/DarkThemeSwitcher";
import { Outlet } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import CartProvider from "./components/providers/CartProvider";
import Header from "./components/Logo";

function App() {
  const [themeDark, setThemeDark] = useState(false);

  const setDarkTheme = (value) => {
    setThemeDark(value);
  };

  return (
    <div
      className={
        "p-2 min-h-screen " + (themeDark ? "dark bg-slate-950 text-white" : "")
      }
    >
      <div className="container mx-auto">
        <Header/>
        <DarkThemeSwitcher darkTheme={themeDark} setDarkTheme={setDarkTheme} />
        <MainMenu />
        <CartProvider>
          <CartWidget />
        </CartProvider>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;