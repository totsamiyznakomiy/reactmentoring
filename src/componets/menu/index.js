const Food = ({ name, ingredients, sellingPrice }) => {
    return (<>
        <n> {name} </n>
        <i>{ingredients} </i>
        <s>{sellingPrice}</s>
    </>);
};

export default Food;