import { useEffect, useState } from "react";
import Title2 from "../components/Title2";
import { useShop } from "../context/ShopContext";
import ItemsCard from "../components/ItemsCard";

function CollectionPage() {
  const { products } = useShop();

  // Initialize state
  const [categoryValue, setCategoryValue] = useState([]);
  const [type, setType] = useState([]);
  const [select,setSelect]=useState('')
  const [filteredProducts, setFilteredProducts] = useState(products.slice(2)); 

  // Handle type changes
  const handleTypeChange = ({ target: { value, checked } }) => {
    setType((prev) => 
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Handle category changes
  const handleCategoryChange = ({ target: { value, checked } }) => {
    setCategoryValue((prev) => 
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
   
  const handleSelect=(e)=>{
    const {value}=e.target;
    setSelect(value)
  }

  // Filter products based on category and type
  useEffect(() => {
    const filterProducts = () => {
      let productCopy = products.slice(2);
      
      if (categoryValue.length > 0) {
        productCopy = productCopy.filter((item) =>
          categoryValue.includes(item.category)
        );
      }
      if (type.length > 0) {
        productCopy = productCopy.filter((item) =>
          type.includes(item.subCategory)
        );
      }
      if(select){
       if(select==='ascending')
       {
        productCopy.sort((a,b)=>a.price-b.price)
       }
       else
       {
        productCopy.sort((a,b)=>b.price-a.price)
       }
      }
      setFilteredProducts(productCopy);
    };

    filterProducts();
  }, [categoryValue, type, products,select]);

  return (
    <div className="collectionPage py-4 flex space-x-2 max-w-screen">
      <div className="w-72 h-96 filter hidden lg:block">
        <div className="text-gray-800 text-lg font-medium mb-6">FILTERS</div>
        
        {/* Category Filters */}
        <div className="space-y-2 border border-gray-500 px-2 py-1 categories mb-2">
          <p className="text-gray-800">CATEGORIES</p>
          {["Men", "Women", "Kids"].map((category) => (
            <div key={category}>
              <label className="font-thin text-gray-800">
                <input
                  type="checkbox"
                  className="mx-2"
                  value={category}
                  onChange={handleCategoryChange}
                />
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Type Filters */}
        <div className="space-y-2 border border-gray-500 mt-6 px-2 py-1 type">
          <p className="text-gray-800">TYPES</p>
          {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
            <div key={type}>
              <label className="font-thin text-gray-800">
                <input
                  type="checkbox"
                  className="mx-2"
                  value={type}
                  onChange={handleTypeChange}
                />
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Display Filtered Products */}
      <div className="collections w-full px-4">
        <div className="flex items-center space-x-2 lg:justify-between  ">
          <Title2 text1="All" text2="Collections" />
          <div className="border border-gray-500 ">
            <select className="p-2 font-light text-base lg:text-medium" onChange={handleSelect}>
                <option value={''}>Sortby : Relavent </option>
                <option value={'ascending'}>Low to High</option>
                <option value={'descending'}>High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 mt-4">
          {filteredProducts.map((item, index) => (
            <ItemsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
