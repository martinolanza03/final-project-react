import { Navbar } from "./Navbar"

export default function Header(props) {
    return (
        <Navbar page={props.page} enter={props.enter} goConsoles={props.goConsoles} home={props.home} />
    )
}