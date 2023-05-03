const MenuCard = ({ item, onClickBuy = () => { } }) => {
    const thc = <div className="text-sm"></div>
    const Sativa = <div className="text-sm"></div>
    return (
        <div class="rounded overflow-hidden shadow-lg">
            <img src={item.image} className="w-full" />
            <div className="px-2"></div>
            <div className="text-2xl font-bold">{item.name}</div>
            <div className="p-2">{item.thc}</div>
            <div className="p-2">{item.Sativa}</div>
            <button
                onClick={() => onClickBuy(item)}
                class="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy
            </button>

        </div>
    );
};
export default MenuCard;