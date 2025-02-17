import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import "./index.css"
import CollectionPage from "./pages/CollectionPage";
import EachProduct from "./pages/EachProduct";
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
          path: "/product/:id",
          element:<EachProduct/>
          
         
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
