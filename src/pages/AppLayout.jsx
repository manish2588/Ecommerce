import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function AppLayout() {
  const loading = useNavigation();

  if (loading.state === "loading") return <h1>Loading...</h1>;

  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default AppLayout;
