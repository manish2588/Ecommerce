import { useEffect, useState } from "react";
import { auth, db } from "../components/firebase"; // Import Firebase configuration and Google provider
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
// Import sign-in method for Google
import { useSelector,useDispatch } from "react-redux";
import Title2 from "../components/Title2";
import OrderItem from "../components/OrderItem";
import { emptyOrder } from "../reduxToolkit/UserSlice";
const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { userOrder, orderDetails } = useSelector((state) => state.user);
  console.log("userOrder", userOrder);
  console.log("userOrderDetails", orderDetails);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          if (user.providerData[0]?.providerId === "google.com") {
            // If the user signed in with Google, fetch data from Firebase Auth directly
            console.log("User", user.photoURL);
            setUserData({
              name: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            });
          } else {
            // If the user signed in via email/password, fetch data from Firestore
            const userDocRef = doc(db, "Users", user.uid);
            const userDoc = await getDoc(userDocRef); // Fetch the document

            if (userDoc.exists()) {
              setUserData(userDoc.data()); // Set user data from Firestore
            } else {
              console.log("No such document!");
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user logged in");
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  const handleClick = async () => {
    try {
      await auth.signOut();
      dispatch(emptyOrder())
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!userData) {
    return <p>No User Login.</p>; 
  }

  return (
    <main className="mt-4">
      <div className="flex justify-between mt-4  py-4">
        <h1 className="text-2xl lg:text-4xl font-medium font-serif text-gray-500">
          HELLO, {userData.name.toUpperCase()}
        </h1>
        <p>
          <button
            className="bg-red-400 px-2 py-2 text-base cursor-pointer hover:bg-red-600 border border-gray-500 font-medium"
            onClick={handleClick}
          >
            Sign Out
          </button>
        </p>
      </div>
      <div className="my-6">
        <Title2 text1={"YOUR"} text2={"ORDERS"} />
      </div>
      <div className="border-b border-t border-gray-300  mt-4">
        {userOrder.map((item, index) => (
          <div key={index} className=" border-b border-gray-300 py-4">
            <OrderItem
              {...item}
              phone={orderDetails[0].phone}
              city={orderDetails[0].city}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Profile;
