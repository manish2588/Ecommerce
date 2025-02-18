import React from 'react'
import Title2 from '../components/Title2';
import { useDispatch, useSelector } from "react-redux";
import CardListedItem from '../components/CardListedItem';
import { delete_from_cart ,handle_quantity} from '../reduxToolkit/CartSlice';
function CartPage() {
    const { cartItem } = useSelector((state) => state.cart);
    const dispatch=useDispatch();
    console.log(cartItem)
    const handleClick=(id)=>{
    dispatch(delete_from_cart(id))
    }
    const handleChange=(e,id)=>{
        const value = parseInt(e.target.value); 
       dispatch(handle_quantity({value,id}))
    }
  return (
   <section className='mt-8'>
     <div>
        <Title2 text1={'YOUR'} text2={'CART'}/>
     </div>
     <div className=' mt-6'>
     {
        cartItem.map((item,index)=>
            <div key={index}>
              <CardListedItem {...item} handleClick={()=>handleClick(item._id)} handleChange={(e)=>handleChange(e,item._id)}/>
            </div>
        )
     }
     </div>
   </section>
  )
}

export default CartPage;