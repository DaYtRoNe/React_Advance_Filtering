import { useState } from "react";
import Navigation from "./Navigation/nav"
import Products from "./Products/Products"
import products from "./db/data";
import Recomended from "./Recomended/Recomended"
import Sidebar from "./Sidebar/Sidebar"
// import products from "./db/data" 

function App() {

  return (
    <>
      <Sidebar />
      <Navigation/>
      <Recomended/>
      <Products/>
    </>
  );
}

export default App
