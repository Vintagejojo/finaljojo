import React from 'react'
import Styletiles from './Styletiles';

function Main() {
    return (
        <div className="container-fluid main_container_mods">
            <main className="main_mods">
                <h1 className="welcome_header">Welcome</h1>
                <p className="welcome_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem molestiae pariatur optio, nisi quaerat velit cum rerum sit ex voluptatibus?</p>
                <Styletiles />
            </main>
        </div>
    )
}
// welcome tiles will go below main segment
export default Main
