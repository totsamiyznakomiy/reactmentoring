import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";

const MenuCard = ({ item, onClickBuy = () => {} }) => {
  const ingredients = (
    <div className="text-white text-xs">{item.ingredients.join(", ")}</div>
  );

  return (
    <div
      className={
        "bg-transparent rounded overflow-hidden shadow-lg dark:bg-slate-900 " + style.card
      }
    >
      <img src={item.image} className="w-full" />
      <div className="p-2">
        <Link to={`/catalog/${item.id}`}>
          <div className={"text-white text-2xl font-bold " + style.title}>{item.name}</div>
        </Link>
        <div className="py-2">{ingredients}</div>
        <button
          onClick={() => onClickBuy(item)}
          className="w-full bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MenuCard;