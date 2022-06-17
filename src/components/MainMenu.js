import { Link } from "react-router-dom"

export const MainMenu = () => (
    <ul className="main-menu nav"> 
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
        </li>
    </ul>
)