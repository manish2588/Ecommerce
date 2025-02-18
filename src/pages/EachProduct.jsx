import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import SimilarProduct from "../components/SimilarProduct";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "../reduxToolkit/CartSlice";

function EachProduct() {
  const { id } = useParams();
  const { products } = useShop();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  const [message, setMessage] = useState("");

  const handleClick = (item) => {
    const isInCart = cartItem.find((cart) => cart._id === item._id);
    if (isInCart) {
      setMessage("Already in cart");
      setTimeout(() => setMessage(""), 1000);
    } else {
      dispatch(add_to_cart(item));
      setMessage("Added to cart");
      setTimeout(() => setMessage(""), 1000);
    }
  };

  console.log(cartItem);

  useEffect(() => {
    const oneProduct = products.find((item) => item._id === id);
    if (oneProduct) {
      setProduct(oneProduct);
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
  }, [products, id]);

  return (
    <>
      <main className="eachProduct max-w-full min-h-[80vh] flex flex-col lg:flex-row py-6">
        {message && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-blue-300  p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="text-xl font-serif text-center text-gray-800">
              {message}
            </div>
          </div>
        )}
        <div className="imageSide h-[50vh] lg:h-[75vh] w-full lg:w-1/2">
          {product && (
            <div className="h-full w-full flex space-x-4">
              <div className="h-40 w-32">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
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
              <p className="mt-8 text-gray-900">Select Size</p>
              <div className="mt-4 space-x-4">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="bg-slate-100 border border-gray-500 px-4 py-2 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="mt-8">
                <button
                  className="bg-black text-white px-6 py-2 hover:bg-gray-800"
                  onClick={() => handleClick(product)}
                >
                  ADD TO CART
                </button>
              </div>
              <hr className="mt-8 text-gray-400" />
              <p className="mt-4 text-sm text-gray-500">
                100% Original Product
              </p>
              <p className="text-sm text-gray-500">
                Cash On Delivery is available
              </p>
              <p className="text-sm text-gray-500">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          )}
        </div>
      </main>
      <Title text1="Similar" text2="Products" />
      {product && (
        <SimilarProduct
          category={product.category}
          subCategory={product.subCategory}
        />
      )}
    </>
  );
}

export default EachProduct;
