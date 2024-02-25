import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import {add,remove} from "../redux/slices/CartSlice"
import './Product.css'
function Product({ post }) {
  const description=post.description.substr(0,90);
  const {cart}=useSelector((state)=>state);
  const dispatch=useDispatch();
  const addtocart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  const removefromcart=()=>{
    dispatch(remove(post.id));
    toast.error("Item remove from cart")
  }
  return (

    <div className="box">
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p> {description}</p>
      </div>
      <div className="prdimg">
        <img src={post.image} />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      {cart.some((p) => p.id == post.id) ? (
        <button onClick={removefromcart}>Remove Item</button>
      ) : (
        <button onClick={addtocart}>Add to Cart</button>
      )}
          
    </div>

  );
}

export default Product;
