function OrderItem({ name, price, quantity, image,city,phone }) {
  return (
    <div className="orderItem flex flex-col lg:flex-row max-w-screen h-auto">
      <div className="one lg:w-1/2 flex space-x-4 space-y-4 lg:space-x-20  items-center">
        <img src={image} className="h-24 w-16 object-cover" />
        <div>
          <h1 className="text-base lg:text-lg font-medium">Name</h1>
          <span className="text-sm font-light lg:text-base text-wrap lg:w-60 block">{name}</span>
        </div>
        <div>
            <h1 className="text-base lg:text-lg font-medium">Quantity</h1>
            <span className="text-sm font-light lg:text-base">{quantity}</span>
        </div>
      </div>
      <div className="two lg:w-1/2 flex space-x-4 lg:space-x-20 items-center">
         <div>
            <h1 className="text-base lg:text-lg font-medium">Shipping Address</h1>
            <span className="text-sm font-light lg:text-base">{city}</span>
         </div>
         <div>
            <h1 className="text-base lg:text-lg font-medium">Contact</h1>
            <span className="text-sm font-light lg:text-base">{phone}</span>
         </div>
         <div>
            <h1 className="text-base lg:text-lg font-medium">Status</h1>
            <span className="text-sm font-light lg:text-base">{'Pending'}</span>
         </div>
      </div>
    </div>
  );
}

export default OrderItem;
