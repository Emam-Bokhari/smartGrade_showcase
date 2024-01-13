import { Fragment } from "react"
import "./styles/output.css"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import ScoreBoard from "./ScoreBoard/ScoreBoard"
import Footer from "./Footer/Footer"


const App = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <ScoreBoard />
            <Footer/>
        </Fragment>
    )
}
export default App