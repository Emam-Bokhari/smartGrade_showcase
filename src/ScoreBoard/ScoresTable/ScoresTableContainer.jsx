import { Fragment } from "react"
import ScoresTableClassOne from "./ScoresTableClassOne"
import ScoresTableClassTwo from "./ScoresTableClassTwo"


const ScoresTableContainer = () => {

    return (
        <Fragment>
            <div className="container" >
                <div className="max-w-[848px] mx-auto overflow-auto">
                    <ScoresTableClassOne />
                    <ScoresTableClassTwo />
                </div>
            </div>
        </Fragment>
    )
}
export default ScoresTableContainer