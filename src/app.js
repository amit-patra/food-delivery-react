import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body  from "./components/Body";

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


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
