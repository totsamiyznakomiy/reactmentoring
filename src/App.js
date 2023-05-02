import { useState } from 'react';
import './App.css';
import Menu from './componets/menu';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = item => {
    setCart([...cart, item]);
  };
  return (
    <div className="App p-2">
      <div className="mx-auto my-5 container flex flex-row-reverse text-right">
        <div>
          <div className="text-xl">Basket</div>
          <div>Тumber of goods:{cart.lenght}</div>
          <div>
            Total:{cart.reduce((sum, item) => (sum += item.sellingPrice), 0) } usd
            </div>
        </div>
      </div>
      <Menu onItemBuy={(item => addToCart(item))}></Menu>
    </div>
  );
}

export default App;