import { motion, useAnimation, easeInOut } from "framer-motion";
import { assets } from "../assets/assets";
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
      {/* Image and Hover Effect */}
      <motion.div
        className="rounded-lg  relative"
        onHoverStart={() => controls.start({ scaleY: 1, opacity: 1 })}
        onHoverEnd={() => controls.start({ scaleY: 0, opacity: 0 })}
      >
        <img src={image} className="w-full h-full object-cover" />

        {/* Hover Effect */}
        <motion.div
          className="rounded-lg absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-200 opacity-50 grayscale-50"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.5, ease: easeInOut }}
          style={{ transformOrigin: "bottom" }}
        >
          <img src={assets.cart_icon} className="h-6 w-6 " />
          <h1 className="text-gray-800 font-semibold text-base mt-2">
            ADD TO CART
          </h1>
        </motion.div>
      </motion.div>

      {/* Product Name and Price */}
      <p className="text-gray-500">{name}</p>
      <p className="text-gray-800 font-bold">
        {"$ "}
        {price}
      </p>
    </motion.div>
  );
}

export default ItemsCard;
