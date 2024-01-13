import { Fragment } from "react"
import Searchbox from "./Searchbox"
import ScoresTableContainer from "./ScoresTable/ScoresTableContainer"

const ScoreBoard = () => {
    return (
        <Fragment>
            <Searchbox />
            <ScoresTableContainer />
        </Fragment>
    )
}
export default ScoreBoard