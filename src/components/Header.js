import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, 
    NavbarBrand, Nav, NavItem, NavLink 
} from 'reactstrap'

const Header = (props) => {
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => setCollapsed(!collapsed)

    return (
        <div>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Show Me the Boba</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        { props.currentUser ?
                            <>
                                <NavItem>
                                    <NavLink href="/search">Search</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/ratings">See All Ratings</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/ratings/new">Add Rating</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/drinks">To Drink List</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/profile">Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/logout" onClick={ props.logout }>Logout</NavLink>
                                </NavItem>
                            </>    
                        :
                            <>    
                                <NavItem>
                                    <NavLink href="/search">Search</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login">Login</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header