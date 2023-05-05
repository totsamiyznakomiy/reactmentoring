const MenuCard = ({ item, onClickBuy = () => { } }) => {
    const content = <div className="text-sm"></div>
    return (
        <div class="bg-white rounded-xl border-4 border-black overflow-hidden shadow-lg">
            <img src={item.image} className="w-full" />
            <div className="px-2"></div>
            <div className="text-2xl font-bold">{item.name}</div>
            <div className="p-2">{item.content}</div>
            <button
                onClick={() => onClickBuy(item)}
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Buy
            </button>

        </div>
    );
};
export default MenuCard;