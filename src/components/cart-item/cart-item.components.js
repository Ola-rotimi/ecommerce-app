import "./cart-item.styles.scss";

const CartItem = ({ products }) => {
  const { name, quantity } = products;

  return (
    <div className="cart-item">
      <p>{name}</p>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
