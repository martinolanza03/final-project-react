import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Videogames(props) {
    const [videogames, setVideogames] = useState([]);
    const navigate = useNavigate();

    function getVideogames() {
        const endpoint = 'http://127.0.0.1:8080/api/videogame';

        axios.get(endpoint)
            .then((res) => {
                setVideogames(res.data.map(r => {
                    return {
                        ...r, droppedDown: false
                    }
                }));
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getVideogames()
    }, []);

    function goToVideogamePage(id) {
        navigate(`/videogame/${id}`)
    }

    const gameDropDownActivate = (index) => {
        setVideogames(g => {
            const gCopy = structuredClone(g);
            gCopy[index].droppedDown = !gCopy[index].droppedDown;
            return gCopy
        })
    }


    return (
        <div className="VideoGamesPage" ref={props.videoGamesPageRef}>
            <div className="ConsolePageTitle">Videogames</div>
            <div className="ConsoleContainer">
                {videogames.map((videogame, index) => {
                    return <div className="GameItem" key={index}>
                        <div className="ConsoleName">{videogame.name}</div>
                        <img src={videogame.photoUrl} className="GameImage" />
                        <button className="HomeMainButton" style={{ fontSize: "15px" }} onClick={() => gameDropDownActivate(index)}>▼ Compatibility List ▼</button>
                        {videogame.droppedDown && videogame.consoles.map((con, index) => {
                            return <div key={index}>{con.name}</div>
                        })}
                        <button className="HomeMainButton" onClick={() => goToVideogamePage(videogame.id)}>Discover More</button>
                    </div>
                })}
            </div>
        </div>
    )
}