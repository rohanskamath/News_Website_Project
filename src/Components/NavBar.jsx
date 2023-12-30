import React from 'react'

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><span class="badge bg-secondary fs-4">EchoNews</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav point">
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>props.setCategory("technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link " onClick={()=>props.setCategory("business")}>Bussiness</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>props.setCategory("health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>props.setCategory("science")}>Science</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>props.setCategory("sports")}>Sports</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={()=>props.setCategory("entertainment")}>Entertainment</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar