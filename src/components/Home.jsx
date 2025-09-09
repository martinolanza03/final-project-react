export default function Home(props) {
    return (
        <div className="HomeMainPage" ref={props.mainPageRef}>
            <div className="HomeMainTitle">Welcome to the house of Videogame</div>
            <button className="HomeMainButton" onClick={() => props.enter()}>
                ENTER
            </button>
        </div>
    )
}