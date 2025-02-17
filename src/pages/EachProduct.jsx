import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function EachProduct() {
  const { id } = useParams();
  const { products } = useShop();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const oneProduct = products.find((item) => item._id === id);
    setProduct(oneProduct);
  }, [products, id]);

  return (
    <>
    <main className="eachProduct max-w-full min-h-screen flex flex-col lg:flex-row py-6">
      <div className="imageSide h-full w-full lg:w-1/2">
        {product && (
         <div className="h-full w-full flex space-x-4">
            <div className="h-40 w-32">
             <img src={product.image}/>
            </div>
            <div className="">
            <img src={product.image} className=" w-full h-full object-cover"/>
            </div>
         </div>
        )}
      </div>
      <div className="contentSide h-full w-full lg:w-1/2">
        {product && (
          <div className="p-6">
            <h1 className="text-2xl font-medium">{product.name}</h1>
            <p className="mt-4 text-3xl font-semibold text-gray-800">
              ${product.price}
            </p>
            <p className="mt-8 text-gray-500">{product.description}</p>
            <p className="mt-8 text-gray-900"> Select Size</p>
            <p className="mt-4 space-x-4">
                {product.sizes.map((item,index)=><button key={index} className="bg-slate-100 border border-gray-500 px-4 py-2">
                    {item}
                </button>)}
            </p>
            <p className="mt-8">
                <button className="bg-black text-white px-6 py-2">ADD TO CART</button>
            </p>
            <hr className="mt-8 text-gray-400"/>
            <p className="mt-4 text-sm text-gray-500">100% Original Product</p>
            <p className="text-sm text-gray-500">Cash On Delivery is available</p>
            <p className="text-sm text-gray-500">Easy return and exchange policy within 7 days.</p>
          </div>
        )}
      </div>
    </main>
    </>
  );
}

export default EachProduct;
