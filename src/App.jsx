import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import "./index.css"
import CollectionPage from "./pages/CollectionPage";
import EachProduct from "./pages/EachProduct";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import Login from "./components/LoginPage";
import Signup from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import PlaceInOrder from "./pages/PlaceInOrder";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className=" px-[5vw] lg:px-[10vw]">
          <AppLayout />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path:'/collection',
          element:<CollectionPage/>
        },
        {
          path:'/about',
          element:<AboutPage/>

        },
        {
          path:'/cart',
          element:<CartPage/>

        },
        {
          path: "/product/:id",
          element:<EachProduct/>
         
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
           path:'/signup',
           element:<Signup/>
        },
        {
          path:'/profile',
          element:<ProfilePage/>
        },
        {
          path:'/order',
          element:<PlaceInOrder/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
