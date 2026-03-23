import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItem.length == 0 ? (
        <h1>Empty Cart</h1>
      ) : (
        <div className="w-6/12 m-auto">
          <ItemList data={cartItem}></ItemList>
        </div>
      )}
    </div>
  );
};
export default Cart;
