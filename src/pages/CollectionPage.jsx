import { useEffect, useState } from "react";
import Title2 from "../components/Title2";
import { useShop } from "../context/ShopContext";
import ItemsCard from "../components/ItemsCard";
import { NavLink } from "react-router-dom";
import { easeIn, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleSearch } from "../reduxToolkit/ValueSlice";
function CollectionPage() {
  const { products } = useShop();

  // Initialize state
  const [categoryValue, setCategoryValue] = useState([]);
  const [type, setType] = useState([]);
  const [select, setSelect] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products.slice(2));
  const [filterHidden, setFilterHidden] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { isSearchVisible } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  // Handle type changes
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
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

  const handleSelect = (e) => {
    const { value } = e.target;
    setSelect(value);
  };

  const handleSearch = () => {
    dispatch(toggleSearch());
    setSearchValue("");
  };

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
      if (select) {
        if (select === "ascending") {
          productCopy.sort((a, b) => a.price - b.price);
        } else {
          productCopy.sort((a, b) => b.price - a.price);
        }
      }
      if (searchValue) {
        productCopy = productCopy.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      setFilteredProducts(productCopy);
    };

    filterProducts();
  }, [categoryValue, type, products, select, searchValue]);
  console.log(searchValue);
  return (
    <div className="collectionPage py-4 flex flex-col lg:flex-row space-x-2 max-w-screen mt-8">
      <div className=" lg:hidden mb-2 text-lg font-medium ">
        {" "}
        <button onClick={() => setFilterHidden(!filterHidden)}>
          Filter {">"}
        </button>
      </div>
      <motion.div
        className={`  w-48 h-72 lg:w-72 lg:h-96 filter ${
          filterHidden ? "block" : "hidden"
        } lg:block`}
        initial={{ y: -60 }}
        animate={{ y: 0 ,transition:{
          type:'spring',
          stiffness:100
        }}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-gray-800 text-lg font-medium mb-6 hidden lg:block">
          FILTERS
        </div>

        {/* Category Filters */}
        <div className=" space-y-1 lg:space-y-2 border border-gray-500 px-2 py-1 categories mb-2">
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
      </motion.div>

      {/* Display Filtered Products */}
      <motion.div className="collections w-full px-4">
        <motion.div
          className={`w-full ${
            isSearchVisible ? "block" : "hidden"
          } mb-4 flex justify-center`}
        >
          <input
            type="text"
            placeholder="Search"
            className=" w-3/4 lg:w-1/2 px-4 py-1 rounded-4xl border border-gray-500"
            onChange={(e) => handleSearchChange(e)}
          />
          <button
            className="ml-2 px-2 cursor-pointer text-lg"
            onClick={handleSearch}
          >
            X
          </button>
        </motion.div>
        <div className="flex items-center space-x-2 lg:justify-between  ">
          <Title2 text1="ALL" text2="COLLECTIONS" />
          <div className="border border-gray-500 ">
            <select
              className=" p-0 lg:p-2 font-light text-base lg:text-medium"
              onChange={handleSelect}
            >
              <option value={""}>Sortby : Relavent </option>
              <option value={"ascending"}>Low to High</option>
              <option value={"descending"}>High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:grid-cols-3 mt-4">
          {filteredProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: easeIn }}
              viewport={{ once: true }}
            >
              <NavLink to={`/product/${item._id}`}>
                <ItemsCard {...item} />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default CollectionPage;
