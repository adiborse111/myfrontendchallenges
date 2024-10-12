"use client"

import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SecondPage from "./components/SecondPage"

const Page = () => {
  return (
    <div className="flex flex-col">
        <NavBar />
        <Hero />
        <SecondPage />
    </div>
  )
}

export default Page