import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {

    return (

        <header className="header-main">
            <div className="logo">Pamišias Krepšinis</div>

            <nav className="nav-item">
                <ul className="nav-list">

                    <Link to = '/' className="nav-list-item nav-link">Home</Link>
                    {/* <Link to = '/admin' className="nav-list-item nav-link">Registrouti</Link> */}
                    <Link to = '/login' className="nav-list-item nav-link">Prisijungti</Link>

                </ul>
            </nav>
        </header>


    )


}

export default Header

//d-flex flex-row-reverse bd-highlight