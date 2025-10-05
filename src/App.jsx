import Navigation from "./Navigation/nav"
import Products from "./Products/Products"
import Recomended from "./Recomended/Recomended"
import Sidebar from "./Sidebar/Sidebar"

function App() {

  return (
    <>
      <Sidebar />
      <Navigation />
      <Recomended />
      <Products />
    </>
  )
}

export default App
