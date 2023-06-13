import CartIcon from "../svg/CartIcon";

const CartWidget = ({ cart, sum }) => {
  return (
    <div className="mx-auto my-5 container flex flex-row-reverse text-right">
      <div>
        <div className="flex justify-end py-2">
          <CartIcon /> X {cart.length}
        </div>
        <div className="px-2 py-2">Total: {sum} THB</div>
      </div>
    </div>
  );
};

export default CartWidget;