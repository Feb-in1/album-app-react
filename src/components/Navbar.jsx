import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ALBUM APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Add Album</Link>
                            <Link class="nav-link" to="/search">Search Album</Link>
                            <Link class="nav-link" to="/delete">Delete Album</Link>
                            <Link class="nav-link" to="/ViewAll">View All Albums</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar