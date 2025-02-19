import { assets } from "../assets/assets";
import { easeInOut, motion } from "framer-motion";
function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        // Stagger child animations by 0.3 seconds
      },
    },
  };

  // Child animation variant for each HomeCard
  const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        ease: easeInOut,
      },
    },
  };
  return (
    <div className="heroSection max-w-screen h-[75vh] border border-t-0 border-gray-500 flex flex-col  lg:flex-row">
      <div className="heroLeft w-full lg:w-1/2 h-full flex flex-col items-center justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-2/5"
        >
          {" "}
          <motion.p
            className="text-gray-800 text-base  lg:text-lg"
            variants={cardVariants}
          >
            OUR BEST SELLER
          </motion.p>
          <motion.p
            className="text-gray-800 text-4xl lg:text-6xl font-serif"
            variants={cardVariants}
          >
            Latest Arrivals
          </motion.p>
          <motion.p
            className="text-gray-800 text-base  lg:text-lg"
            variants={cardVariants}
          >
            SHOP NOW
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        className="basis-1/2 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        <img src={assets.hero_img} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}

export default HeroSection;
