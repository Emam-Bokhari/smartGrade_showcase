import lwsLogo from "./assets/lws-logo-en.svg"
import { Fragment } from "react"

const Navbar = () => {
    return (
        <Fragment>

        <nav className="py-6">
            <div
                className="container mx-auto flex items-center justify-between gap-x-6"
            >
                {/* logo  */}
                <a href="/">
                    <img
                        className="h-[40px]"
                        src={lwsLogo}
                        alt="Lws"
                    />
                </a>
                {/* logo end */}
                <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#"
                    >Get Admission</a>
            </div>
        </nav>

        </Fragment>
    )
}
export default Navbar