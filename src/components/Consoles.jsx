import axios from "axios";
import { useEffect, useState } from "react"

export default function Consoles(props) {
    const [consoles, setConsoles] = useState([]);

    function getConsoles() {
        const endpoint = 'http://127.0.0.1:8080/api/console';

        axios.get(endpoint)
            .then((res) => {
                setConsoles(res.data);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => { getConsoles() }, [])
    return (
        <div className="ConsolePage" ref={props.consolePageRef}>
            <div className="ConsolePageTitle">Consoles</div>

            <div className="ConsoleContainer">
                {consoles.map((console, index) => {
                    return <div className="ConsoleItem" key={index}>
                        <div className="ConsoleName">{console.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}