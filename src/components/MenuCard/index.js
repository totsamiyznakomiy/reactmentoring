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
        "bg-gradient-to-r from-gray-500 to-white-500 rounded-2xl overflow-hidden shadow-lg" + style.card
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
          className="w-full text-black bg-gradient-to-r from-white to-gray-500 border-solid hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-black-500 dark:focus:ring-black-800 font-medium rounded-lg text-s px-5 py-2.5 text-center mr-2 mb-2"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MenuCard;