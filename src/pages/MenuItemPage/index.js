import { useParams } from "react-router-dom";
import menu from "../../store/slices/menuSlice";
import { useSelector } from "react-redux";

const MenuItemPage = () => {
  const menu = useSelector((state) => state.menu);
  const { id } = useParams();
  let menuItem = menu.find((item) => item.id == id);
  console.log(menuItem);
  return (
    <>
      <h1>{menuItem.name}</h1>
      <img src={menuItem.image}></img>
      <p>{menuItem.ingredients.join(", ")}</p>
    </>
  );
};

export default MenuItemPage;