import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/footer";
import About from "./src/About";
import Error from "./src/Error";
import Contact from "./src/Contact";
import RestaurantMenu from "./src/RestaurantMenu";
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./src/Cart";

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
    <>
      <Header />
      
      {/* Outlet*/}
     <Outlet></Outlet>
      <Footer />
    </>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout></AppLayout>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/about',
        element:<About></About>,
        
      },{
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/',
        element:<Body></Body>
      },{
        path:'/restaurant/:resId',
        element:<RestaurantMenu></RestaurantMenu>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
