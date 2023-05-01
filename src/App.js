import logo from './logo.svg';
import './App.css';
import Food from './componets/menu';

function App() {
  let foods = [
    {
      name: "Chocolate chip cookies",
      ingredients: [
        "flour",
        "sugar",
        "butter",
        "eggs",
        "salt"
      ],
      sellingPrice: 29,
    },
    {
      name: "Spaghetti with meatballs",
      ingredients: [
        "pasta",
        "groundBeef",
        "tomatoSauce",
        "breadCrumbs",
        "eggs"
      ],
      sellingPrice: 28,
    },
    {
      name: "Chicken stir-fry",
      ingredients: [
        "chickenBreast",
        "vegetables",
        "soySauce",
        "cornstarch",
        "rice"
      ],
      sellingPrice: 15,
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        {foods.map((item) => (
          <Food name={item.name} ingredients={item.ingredients} sellingPrice={item.sellingPrice} />
        ))}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
