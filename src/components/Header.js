import React from 'react'


function Header() {
    return (
        <header>
        <nav>
            <div className="hamburger container-lg-12 container-md-12 container-lg-12">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav_links nav_mods" style={{display: 'inline', listStyle: 'none' }}>
                
                <li><a href="#jojo_zone">Home </a></li>
                <li><a href="#jojo_zone">About </a></li>
                <li><a href="#project_zone">Store</a></li>
                <li><a href="#project_zone">Contact</a></li>
                <li><a href="#project_zone">??????</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header
