import Header from "../components/Header"
import Home from "../components/Home"
import Videogames from "../components/Videogames"
import Consoles from "../components/Consoles"
import { useState, useRef } from "react";


export default function DefaultLayout() {
    const [page, setPage] = useState(0);

    const mainPageRef = useRef();
    const consolePageRef = useRef();
    const videoGamesPageRef = useRef();

    const enter = () => {
        setPage(1);
        videoGamesPageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const goConsoles = () => {
        setPage(2);
        consolePageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };


    const home = () => {
        setPage(0);
        mainPageRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (<>

        <Header page={page} enter={enter} goConsoles={goConsoles} home={home} />
        <main>
            <Home mainPageRef={mainPageRef} enter={enter} />
            <Videogames videoGamesPageRef={videoGamesPageRef} />
            <Consoles consolePageRef={consolePageRef} />
        </main>
    </>
    )
}