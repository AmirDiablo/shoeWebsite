import rain from "./assets/background10.png"
import laptop from "./assets/laptop.png"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Example1 from "./components/Example1"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Footer from "./components/Footer"

function App() {
  return ( 
    <BrowserRouter>
      <Nav />
      <div className="mt-25 md:mt-8 lg:-mt-7">
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="example1" Component={Example1}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
