export function Navbar(props) {

    return (
        <div className="NavBar">
            <div className="NavBarTitle" onClick={() => props.home()}>
                WEBSITE
            </div>
            <div className={'NavBarItem ' + (props.page == 1 ? 'Active' : '')} style={{ marginLeft: 'auto' }} onClick={() => props.enter()}>VideoGames</div>
            <div className={'NavBarItem ' + (props.page == 2 ? 'Active' : '')} onClick={() => props.goConsoles()}>Consoles</div>
        </div>
    )
}