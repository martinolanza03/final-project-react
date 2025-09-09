import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

export default function DiscoverMore() {
    const [videogame, setVideogame] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    function getVideogame() {
        const endpoint = `http://127.0.0.1:8080/api/videogame/${id}`;

        axios.get(endpoint)
            .then((res) => {
                console.log(res.data)
                setVideogame({
                    ...res.data,
                    droppedDown: false
                });
            })
            .catch((err) => console.log(err));
    }

    const gameDropDownActivate = () => {
        setVideogame(prev => ({
            ...prev,
            droppedDown: !prev?.droppedDown
        }));
    }

    useEffect(() => {
        getVideogame()
    }, [id]);

    if (!videogame) {
        return <div className="Container" style={{ alignItems: 'center' }}>Loading...</div>;
    }

    return (
        <div className="Container VideoGamesPage" style={{ alignItems: 'center' }}>
            <h1>{videogame.name}</h1>
            <img src={videogame.photoUrl} style={{ width: '200px', height: '300px' }} />
            <button className="HomeMainButton" style={{ fontSize: "15px" }} onClick={gameDropDownActivate}>
                ▼ Compatibility List ▼
            </button>

            {videogame.droppedDown && videogame.consoles && videogame.consoles.map((con, index) => {
                return <div key={index}>{con.name}</div>
            })}

            <p style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'white' }}>Descrizione:</span> {videogame.description}
            </p>
            <p style={{ fontWeight: 'bold' }}>
                <span style={{ color: 'white' }}>Prezzo:</span> {videogame.price} €
            </p>
            <button className="HomeMainButton" onClick={() => navigate(-1)}>
                Torna indietro
            </button>
        </div>
    )
}