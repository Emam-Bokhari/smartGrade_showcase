import { Fragment } from "react"
import "./styles/output.css"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import ScoreBoard from "./ScoreBoard/ScoreBoard"


const App = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroSection />
            <ScoreBoard />
        </Fragment>
    )
}
export default App