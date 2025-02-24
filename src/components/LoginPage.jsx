import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth,googleProvider} from "./firebase"; // Import Google provider
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Title from "./Title";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/signup");
  };

  // 🔹 Handle Login with Email/Password
  const handleLogin = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/profile");
      console.log("Login successful:", userCredential.user);
      toast.success("Login successful!", { position: "top-center" });

      reset(); // Reset the form after successful login
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Invalid email or password!", { position: "top-center" });
    }
  };

  // 🔹 Handle Login with Google
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/profile");
      console.log("Google Login successful:", result.user);
      toast.success("Google Login successful!", { position: "top-center" });
    } catch (error) {
      console.error("Google Login error:", error);
      toast.error("Google login failed!", { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md lg:max-w-1/3 p-6 h-full rounded-lg mb-16 ">
      <Title text1={'LOGIN'} text2={'FORM'}/>

      
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4 mt-4">
          <div>
            <label className="block text-base lg:text-base font-light mb-4 ">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border-b-2 outline-none border-gray-500 font-light  bg-white"
            />
            {errors.email && (
              <p className="text-red-500 text-base">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base lg:text-base font-light mb-4 ">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-2 border-b-2  outline-none border-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-base">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-200 text-black py-2 rounded-md font-light  hover:bg-blue-400"
          >
            Login
          </button>
        </form>

       
        <div className="mt-4 flex flex-col items-center">
          <p className="text-gray-500 text-base font-light">OR</p>
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center font-light text-black py-2 rounded-md bg-blue-200 hover:bg-blue-400 mt-2 "
          >
          
            Login with Google
            <FcGoogle className="ml-2"/>
          </button>
        </div>

       
        <p className="text-base text-center font-light mt-4">
          Don't have an account?{" "}
          <button className="text-blue-500 underline  font-light" onClick={handleNavigate}>
            Sign up
          </button>
        </p>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
