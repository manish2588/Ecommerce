import { motion, useAnimation, easeInOut } from "framer-motion";

import { GiShoppingCart } from "react-icons/gi";
function ItemsCard({ image, name, price }) {
  const controls = useAnimation();

  return (
    <motion.div
      className="itemCard relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      viewport={{ once: true }}
    >
      <motion.div
        className="rounded-lg  relative"
        onHoverStart={() => controls.start({ scaleY: 1, opacity: 1 })}
        onHoverEnd={() => controls.start({ scaleY: 0, opacity: 0 })}
      >
        <img src={image} className="w-full h-full object-cover" />

        <motion.div
          className="rounded-lg absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 bg-gray-200/50"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, ease: easeInOut }}
          style={{ transformOrigin: "bottom" }}
        >
          <GiShoppingCart size={35} />
          <h1 className="text-gray-900  font-serif font-semibold text-lg mt-2">
            ADD TO CART
          </h1>
        </motion.div>
      </motion.div>

      <p className="text-gray-500">{name}</p>
      <p className="text-gray-800 font-bold">
        {"$ "}
        {price}
      </p>
    </motion.div>
  );
}

export default ItemsCard;
