import Title2 from "../components/Title2";
import { useDispatch, useSelector } from "react-redux";
import CardListedItem from "../components/CardListedItem";
import { delete_from_cart, handle_quantity } from "../reduxToolkit/CartSlice";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../components/Title";

function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const shippingFee=10;
  const subTotal=cartItem.reduce((acc,item)=>acc+(Number((item.price))*Number((item.quantity))),0)

  const handleClick = (id) => {
    dispatch(delete_from_cart(id));
    setMessage("Item Removed");
    setTimeout(() => setMessage(""), 1000);
  };

  const handleChange = (e, id) => {
    const value = parseInt(e.target.value);
    dispatch(handle_quantity({ value, id }));
  };
  if (cartItem.length <= 0)
    return (
      <div className="mt-8 flex flex-col items-center mb-8">
        <Title2 text1={"YOUR"} text2={"CART"} />
        <h1 className="mt-8 text-2xl lg:text-6xl text-gray-500 ">
          {" "}
          No Item in Cart
        </h1>
      </div>
    );
  return (
    <section className="mt-8">
      <div>
        {message && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 bg-blue-300 p-4 transform -translate-x-1/2 -translate-y-1/4 rounded-lg shadow-lg w-[50vw] lg:max-w-[15vw]"
          >
            <div className="text-lg font-serif text-center text-gray-800">
              {message}
            </div>
          </motion.div>
        )}
        <Title2 text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="mt-6">
        <AnimatePresence>
          {cartItem.map((item, index) => (
            <motion.div
              key={index} // Use a unique key for each item
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 100 }} // Add exit animation (move out to the right and fade)
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
            <p className="text-gray-800 text-sm font-bold">{subTotal+10}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
