import { Fragment } from "react"
import Searchbox from "./Searchbox"
import ScoresTable from "./ScoresTable"

const ScoreBoard = () => {
    return (
        <Fragment>
            <Searchbox />
            <ScoresTable />
        </Fragment>
    )
}
export default ScoreBoard