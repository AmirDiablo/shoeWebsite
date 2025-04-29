import { useState, useEffect } from "react"

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom"
import Example1 from "./components/Example1"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import Products from "./pages/Products"
import ShowProduct from "./pages/showProduct"
import Bag from "./pages/Bag"
import Favourite from "./pages/Favourite"
import Features from "./pages/Features"


function App() {

  const [isLarge, setIsLarge] = useState(window.innerWidth > 1200)

    const handleResize = ()=> {
        setIsLarge(window.innerWidth > 1200)
    }

    useEffect(()=> {
        window.addEventListener("resize", handleResize)
        return ()=> {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

  return ( 
    <HashRouter>
      <Nav />
      <div className="mt-25 md:mt-8 lg:-mt-7">
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route path="example1" Component={Example1}/>
          <Route path="products" Component={Products}/>
          <Route path="showProduct" Component={ShowProduct}/>
          <Route path="bag" Component={Bag}/>
          <Route path="favourite" Component={Favourite}/>
          <Route path="features" Component={Features}/>
        </Routes>
      </div>
      {isLarge ? <Footer2 /> : <Footer />}
    </HashRouter>
  )
}

export default App
