import MenuCard from "../../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";
import { useEffect } from "react";
import LoadingError from "../../components/LoadingError";
import LoadingStart from "../../components/LoadingStart";

const Menu = () => {
  const menu = useSelector((state) => state.menu);
  // const [category, setCategory] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu());
  }, []);

  return (
    <>
      {menu.loading === "fulfilled" && (
        <div className={"grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}>
          {menu.items.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      )}

      {menu.loading === "pending" && (
        <LoadingStart message="Loading in progress" />
      )}

      {menu.loading === "rejected" && (
        <LoadingError message="Error loading data" />
      )}
    </>
  );
};

export default Menu;