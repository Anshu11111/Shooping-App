import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={cart.id} item={item} itemindex={index} />;
            })}
          </div>

          <div>
            <div> Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total items:{cart.length}</span>
            </p>
          </div>
          <div>
            <p>Total amount:${totalamount}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button>Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
