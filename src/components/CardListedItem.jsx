import { assets } from "../assets/assets";
function CardListedItem({ image, name, quantity, price, handleClick, _id ,handleChange}) {
  return (
    <div className="max-w-full h-auto flex lg:py-4 py-2 border-t-1 border-gray-300 space-x-2">
      <div className="left basis-4/5 lg:basis-2/3 flex space-x-1 lg:space-x-6">
        <img src={image} className="h-24 w-20 object-cover" />
        <div className="des space-y-2">
          <p className=" text-sm lg:text-lg lg:font-medium text-gray-900">
            {name}
          </p>
          <p className=" text-sm lg:text-base text-gray-500">
            {"$ "}
            {price}
          </p>
        </div>
      </div>
      <div className="right basis-1/5 flex space-x-2 lg:justify-between lg:basis-1/3">
        <input
          type="number"
          value={quantity}
          className="w-10 lg:w-20 border border-gray-300 h-8 px-2 "
          onChange={(e)=>handleChange(e,_id)}
          min={'0'}
        />

        <p>
          <button onClick={() => handleClick(_id)}>
            <img src={assets.bin_icon} className="h-6 w-6 " />
          </button>
        </p>
      </div>
    </div>
  );
}

export default CardListedItem;
