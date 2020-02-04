import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/" className="home-icon"> <FaHome></FaHome></Link>
                        <Link to="/">
                            <img src={logo} alt="Beach Resort"></img>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"></FaAlignRight>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
