import React from "react"
import Navbar from "./components/Navbar"
import Work from "./components/Work"
import Stripes from "./components/Stripes/Stripes"
import Products from "./components/Products/Products"
import Marquees from "./components/Marquees/Marquees"
import Cards from "./components/Cards/Cards"
import Footer from "./components/Footer"
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <div className="min-h-screen w-full font-['satoshi_variable'] bg-zinc-900 text-white">
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
    </>
  )
}

export default App
