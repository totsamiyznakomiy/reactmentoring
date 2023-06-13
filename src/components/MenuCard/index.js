import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();
  const ingredients = (
    <div className="text-s">{item.ingredients.join("/ ")}</div>
  );

  return (
    <div
      className={
        "rounded-xl overflow-hidden shadow-lg" + style.card
      }
    >
      <img src={item.image} className="w-full" alt="" />
      <div className="p-2">
        <Link to={`/catalog/${item.id}`}>
          <div className={"text-2xl font-bold " + style.title}>{item.name}</div>
        </Link>
        <div className="py-2 overline">{ingredients}</div>
        <button
          onClick={() => dispatch(addToCart(item))}
          className="w-full bg-transparent hover:bg-lime-500 text-lime-700 font-bold hover:text-black py-2 px-4 border border-lime-300 hover:border-transparent rounded-3xl"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default MenuCard;