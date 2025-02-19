import Title2 from '../components/Title2';
import { useDispatch, useSelector } from "react-redux";
import CardListedItem from '../components/CardListedItem';
import { delete_from_cart, handle_quantity } from '../reduxToolkit/CartSlice';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CartPage() {
  const { cartItem } = useSelector((state) => state.cart);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(delete_from_cart(id));
    setMessage('Item Removed From Cart');
    setTimeout(() => setMessage(""), 1000);
  }

  const handleChange = (e, id) => {
    const value = parseInt(e.target.value);
    dispatch(handle_quantity({ value, id }));
  }

  return (
    <section className='mt-8'>
      <div>
        {message && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 bg-blue-300 p-4 rounded-lg shadow-lg max-w-[80vw] lg:max-w-[20vw]"
          >
            <div className="text-lg font-serif text-center text-gray-800">
              {message}
            </div>
          </motion.div>
        )}
        <Title2 text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='mt-6'>
        <AnimatePresence>
          {cartItem.map((item, index) => (
            <motion.div
              key={index} // Use a unique key for each item
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 500 }} // Add exit animation (move out to the right and fade)
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
    </section>
  );
}

export default CartPage;
