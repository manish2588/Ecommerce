import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import Title from "../components/Title";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm();
  const handleSignup = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        await setDoc(doc(db, "Users", userCredential.user.uid), {
          email: userCredential.user.email,
          name: data.name,
          role: "user",
        });

        toast.success("User registered successfully!", {
          position: "top-center",
        });

        setTimeout(() => {
          toast.success("Sign-up successful!", { position: "top-center" });
          navigate("/login");
        }, 2000);
      }

      console.log("User Registered:", userCredential.user);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ToastContainer />
      <div className="w-full h-full max-w-md p-6 bg-white rounded-lg mb-16">
        <Title text1={"SIGNUP"} text2={"FORM"} />
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="space-y-4 h-full mt-4 "
        >
          <div>
            <label className="block text-base  font-light">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border-b border-gray-500 outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-light">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border-b outline-none border-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm  font-light">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-base  font-light">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full p-2 border-b outline-none border-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm  font-light">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-base  font-light">
              Confirm Password
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-2 border-b outline-none border-gray-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm  font-light">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white  font-light py-2 rounded-md hover:bg-green-600"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm  font-light text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            className="text-blue-500 hover:underline  font-light cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
