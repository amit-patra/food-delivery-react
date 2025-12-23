import { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";

import Error from "./components/Error";
import RestaurantMenu from "./components/ResturentMenu";
import UserContext from "./utils/UserContext";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

/* 
Header
    -Logo
    - Nav Items
Body
    -Search
    - Resturent Container
        -Resturent Card
            -Img
            -Name of Res, Start Raiting, cuisine, delivery time
Footer
    - Copyright
    -Link
    -Address
    -Contact
*/

const AppLayout = () => {
  let [userName, setUserName] = useState();

  useEffect(() => {
    // Auth API call using UserName and Password
   const data = {
      name: "Amit Patra",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....! </h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturents/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
