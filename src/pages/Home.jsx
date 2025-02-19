import { easeInOut, motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import LatestCollection from "../components/LatestCollection";
import HomeCard from "../components/HomeCard";
import { assets } from "../assets/assets";

function Home() {
  // Parent container variant for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger child animations by 0.3 seconds
      },
    },
  };

  // Child animation variant for each HomeCard
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <HeroSection />
      <LatestCollection />
      <motion.div
        className="grid grid-cols-1 space-y-8 lg:grid-cols-3 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{amount:0.5}}
      >
        <motion.div variants={cardVariants}>
          <HomeCard
            heading={"Easy Exchange Policy"}
            description={"We offer hassle free exchange policy"}
            img={assets.exchange_icon}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <HomeCard
            heading={"7 Days Return Policy"}
            description={"We provide 7 days free return policy"}
            img={assets.quality_icon}
          />
        </motion.div>
        <motion.div variants={cardVariants}>
          <HomeCard
            heading={"Best customer support"}
            description={"We provide 24/7 customer support"}
            img={assets.support_img}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
