import About from "./components/about/About"
import Discover from "./components/discover/Discover"
import { FC } from "react"
import Foods from "./components/foods/Foods"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Offers from "./components/offers/Offers"

const App: FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Foods />
      <Discover/>
      <Offers/>
      <Footer/>
      
    </div>
  )
}

export default App