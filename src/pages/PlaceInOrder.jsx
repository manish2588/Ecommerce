import { useForm } from "react-hook-form";
import Title from "../components/Title";
import { useSelector, useDispatch } from "react-redux";
import { setOrder, setOrderDetails } from "../reduxToolkit/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { emptyCart } from "../reduxToolkit/CartSlice";
function PlaceInOrder() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart);
  console.log(cartItem);
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Order Place successfully!", {
      position: "top-center",
    });
    setTimeout(() => {
      cartItem.map((item) => dispatch(setOrder(item)));
      dispatch(emptyCart())
      dispatch(setOrderDetails(data));
      reset();
      navigate("/profile");
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto p-6 rounded-lg mt-10">
      <ToastContainer />
      <Title text1="PLACE" text2="ORDER" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
       
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-light">First Name</label>
            <input
              {...register("firstName", {
                required: "First Name is required",
              })}
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-base">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-base font-light">Last Name</label>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

      
        <div>
          <label className="block text-base font-light">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
            placeholder="example@mail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-base">{errors.email.message}</p>
          )}
        </div>

        
        <div>
          <label className="block text-base font-light">Phone Number</label>
          <input
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit number",
              },
            })}
            className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
            placeholder="1234567890"
          />
          {errors.phone && (
            <p className="text-red-500 text-base">{errors.phone.message}</p>
          )}
        </div>

       
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-base font-light">City</label>
            <input
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
              placeholder="New York"
            />
            {errors.city && (
              <p className="text-red-500text-base">{errors.city.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-light">State</label>
            <input
              {...register("state", { required: "State is required" })}
              className="w-full p-2 border-b border-gray-400 outline-none focus:border-black bg-transparent"
              placeholder="NY"
            />
            {errors.state && (
              <p className="text-red-500text-base">{errors.state.message}</p>
            )}
          </div>
        </div>

       
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PlaceInOrder;
