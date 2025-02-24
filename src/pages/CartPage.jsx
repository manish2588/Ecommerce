import Title2 from "../components/Title2";
import { useDispatch, useSelector } from "react-redux";
import CardListedItem from "../components/CardListedItem";
import { delete_from_cart, handle_quantity } from "../reduxToolkit/CartSlice";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  const { isAuthenticated}=useSelector((state)=>state.user)
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const shippingFee = 10;
  const subTotal = cartItem.reduce(
    (acc, item) => acc + Number(item.price) * Number(item.quantity),
    0
  );

  const handleClick = (id) => {
    dispatch(delete_from_cart(id));
    toast.success("Item Removed", {
      position: "top-center",
      autoClose:1000
    });
  };
  const handleRoute=()=>{
    if(isAuthenticated)
    {
      navigate('/order')
    }
   else {
    setTimeout(()=>alert('Must be login'),500)
    setTimeout(()=> navigate('/login'),2000)
   }
  }
  const handleChange = (e, id) => {
    const value = parseInt(e.target.value);
    dispatch(handle_quantity({ value, id }));
  };
  if (cartItem.length <= 0)
    return (
      <div className="mt-8 flex flex-col items-center mb-8">
        <Title2 text1={"YOUR"} text2={"CART"} />
        <h1 className="mt-8 text-2xl lg:text-4xl text-gray-500 font-serif ">
          {" "}
          NO ITEMS IN CART
        </h1>
      </div>
    );
  return (
    <section className="mt-8">
      <div>
       <ToastContainer/>
        <Title2 text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="mt-6">
        <AnimatePresence>
          {cartItem.map((item, index) => (
            <motion.div
              key={index} 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 100 }} 
              transition={{ duration: 0.3 }}
            >
              <CardListedItem
                {...item}
                handleClick={() => handleClick(item._id)}
                handleChange={(e) => handleChange(e, item._id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center lg:justify-end mt-8">
        <div className=" w-[60vw] lg:w-[35vw] space-y-2 lg:space-y-4">
          <Title text1={"Your"} text2={"Total"} />
          <div className="border-b-1 border-gray-300 flex justify-between">
            <p className="text-gray-800 text-sm font-medium">Subtotal</p>
            <p className="text-gray-800 text-sm font-medium">{subTotal}</p>
          </div>
          <div className="border-b-1 border-gray-300 flex justify-between">
            <p className="text-gray-800 text-sm font-medium">Shipping Fee</p>
            <p className="text-gray-800 text-sm font-medium">
              {"$ "}
              {10}
            </p>
          </div>

          <div className="border-b-1 border-gray-300 flex justify-between">
            <p className="text-gray-800 text-sm font-bold">Total</p>
            <p className="text-gray-800 text-sm font-bold">{subTotal + 10}</p>
          </div>
          <div className="flex justify-end mt-4">
            {" "}
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 " onClick={handleRoute}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
