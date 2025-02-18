import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import ItemsCard from "./ItemsCard";
import { NavLink } from "react-router-dom";
function LatestCollection() {
  const { products } = useShop();
  const [latestCollection, setLatestCollection] = useState([]);
  const [topSeller, setTopSeller] = useState([]);
  useEffect(() => {
    setLatestCollection(products.slice(2, 14));
    const bestSeller = products.filter((item) => item.bestseller);
    setTopSeller(bestSeller.slice(2));
  }, []);
  return (
    <div>
      <section className="latestCollection  mt-8">
        <Title text1="LATEST" text2={"COLLECTIONS"} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 mt-8">
          {latestCollection.map((item, index) => (
            <div key={index}>
              <NavLink to={`/product/${item._id}`}>
                {" "}
                <ItemsCard {...item} />{" "}
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8 topSeller">
        <Title text1="TOP" text2={"SELLER"} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 mt-8">
          {topSeller.map((item, index) => (
            <div key={index}>
              <NavLink to={`/product/${item._id}`}>
                {" "}
                <ItemsCard {...item} />{" "}
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LatestCollection;
