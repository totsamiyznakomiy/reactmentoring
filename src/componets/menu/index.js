import MenuCard from "./MenuCard";

const Menu = ({ onItemBuy }) => {
    let dishes = [
        {
            name: "Chocolate chip cookies",
            sellingPrice: 100,
            ingredients: [
                "flour",
                "sugar",
                "butter",
                "eggs",
                "salt"
            ],

            image: "/jpeg/chockolate.jpg",
        },
        {
            name: "Spaghetti with meatballs",
            sellingPrice: 300,
            ingredients: [
                "pasta",
                "groundBeef",
                "tomatoSauce",
                "breadCrumbs",
                "eggs"
            ],
            image: "/jpeg/spaghetti.jpeg",
        },
        {
            name: "Chicken stir-fry",
            sellingPrice: 200,
            ingredients: [
                "chickenBreast",
                "vegetables",
                "soySauce",
                "cornstarch",
                "rice"
            ],
            image: "/jpeg/chiken.jpg",
        }
    ]

    return (
        <div className="mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container">
            {dishes.map((item) =>
                (<MenuCard item={item} onClickBuy={onItemBuy} />))}
        </div>);
};

export default Menu;