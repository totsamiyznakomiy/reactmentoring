import MenuCard from "./MenuCard";

const Menu = ({ onItemBuy }) => {
    let cannabise = [
        {
            name: "King Bong",
            sellingPrice: 400,
            thc: "THC - 25%",
            Sativa: "Sativa - 70%",
            image: "/jpeg/kingBong.jpeg",
        },
        {
            name: "Bruce Banner",
            sellingPrice: 350,
            thc: "THC - 20%",
            Sativa: "Sativa - 80%",
            image: "/jpeg/bruceBanner.jpeg",
        },
        {
            name: "OG",
            sellingPrice: 420,
            thc: "THC - 28%",
            Sativa: "Sativa - 60%",
            image: "/jpeg/OG.jpeg",
        }
    ]

    return (
        <div className="mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container">
            {cannabise.map((item) =>
                (<MenuCard item={item} onClickBuy={onItemBuy} />))}
        </div>);
};

export default Menu;