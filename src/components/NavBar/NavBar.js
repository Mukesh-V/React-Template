import React, { useState } from 'react';
import {Divider} from '@material-ui/core'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavLink,
    NavItem,
    Nav
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen);
    const list = () => {
        return([
            {path: "/",name:"Home"},
        ]);
    }
    return(
        <div style={{fontFamily:'Kulim Park,sans-serif'}}>
            <Navbar style={{backgroundColor:'inherit'}} light expand="md">
                <NavbarBrand href="/">Titan Eyewear</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                            {
                                list().map((data,key)=>(
                                    <NavItem className="ml-auto" key={key} >
                                        <NavLink href={data.path} style={{color:'black',fontWeight:'bold'}}>{data.name}</NavLink>
                                    </NavItem>
                                ))
                            }
                    </Nav>
                </Collapse>
            </Navbar>
            <Divider style={{backgroundColor:'black'}}></Divider>
        </div>
    )
}

export default NavBar;