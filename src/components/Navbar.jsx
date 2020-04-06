import React from 'react'
const Navbar = props => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <form className="form-inline">
                <button className="btn btn-outline-danger" type="button">Chirps</button>
                <button className="btn btn-outline-warning" type="button">Add Chirps</button>
            </form>
        </nav>
    )
}

export default Navbar;