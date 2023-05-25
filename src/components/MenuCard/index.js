import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const ingredients = (
    <div className="text-xs">{item.ingredients.join(", ")}</div>
  );

  return (
    <div
      className={
        "bg-orange-300 rounded-2xl overflow-hidden shadow-lg" + style.card
      }
    >
      <img src={item.image} className="w-full" />
      <div className="p-2">
        <Link to={`/catalog/${item.id}`}>
          <div className={"text-2xl font-bold " + style.title}>{item.name}</div>
        </Link>
        <div className="py-2">{ingredients}</div>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="w-full bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MenuCard;