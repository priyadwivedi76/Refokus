import React from "react"
import Navbar from "./components/Navbar"
import Work from "./components/Work"
function App() {

  return (
    <>
    <div className="h-screen w-full font-['satoshi_variable'] bg-zinc-900 text-white">
      <Navbar/>
      <Work/>
    </div>
    </>
  )
}

export default App
