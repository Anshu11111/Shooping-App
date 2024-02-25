import React from 'react'
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {add,remove} from "../redux/slices/CartSlice"
import './CartItem.css'

function CartItem({item,itemindex}) {
  const dispatch=useDispatch();
  const removefromcart=()=>{
    dispatch(remove(item.id));
    toast.success("Item remove from cart");
    }
  return (
    <div>
      <div>
        <div className='cartimg'>
          <img src={item.image}/>
        </div>
        <div>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removefromcart}>
            
          <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem