import  { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import ItemsCard from "./ItemsCard";
import { NavLink } from "react-router-dom";
function SimilarProduct({ category, subCategory }) {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const { products } = useShop();

  useEffect(() => {
   
    const productCopy = products
      .slice(2)
      .filter(
        (item) => item.category === category && item.subCategory === subCategory
      );

    setRelatedProduct(productCopy.slice(0, 5));
  }, [category, subCategory, products]); 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      {relatedProduct.map((item,index) => (
        <div key={index}>
         
        
          <NavLink to={`/product/${item._id}`}>
            <ItemsCard {...item} />{" "}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SimilarProduct;
