import React, { Component } from 'react'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Jumbotron,
    Breadcrumb,
    BreadcrumbItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
import './index.css'
import { Link} from 'react-router-dom'
import logo from '../../images/logo.png'

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen : false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render () {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand tag={Link} to="/">                            
                            <img className="logo" alt="Logo" src={logo}></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="border-0" />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar style={{ fontSize: "0.9rem" }}>
                            <NavItem className="mx-md-2">
                                <NavLink tag={Link} to="/">
                                Home
                                </NavLink>
                            </NavItem>
                            <NavItem className="mx-md-2">
                                <NavLink tag={Link} to="/pneus">
                                    Stock
                                </NavLink>
                            </NavItem>
                            <NavItem className="mx-md-2">
                                <NavLink tag={Link} to="/formPneu">
                                    Ajout pneu
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Ventes
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={Link} to="/ventePneu">
                                    Vente pneu
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem tag={Link} to="/venteAccessoire">
                                    Vente accesoire
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Historiques
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={Link} to="/historiqueAchatPneu">
                                    Achat pneus
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem className="mx-md-2">
                                <Button outline color="warning" tag={Link} to="/">
                                    Pneumatique AL-BARAKA
                                </Button>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Jumbotron fluid className="text-center bg-dark">
                    <Container className="text-white">
                        <h1 className="display-3 font-weight-bold py-4">{this.props.title}</h1>
                        <h4 className="font-weight-light">Pneumatique AL-BARAKA</h4>
                        <div className="py-3">
                            <Button tag={Link} to="/formPneu" className="mx-2" color="warning">
                                Commande
                            </Button>
                            <Button tag={Link} to="/ventePneu" className="mx-2" color="warning" outline>
                                Vendre Pneu
                            </Button>
                        </div>
                    </Container>
            </Jumbotron>
            <Container>
                <Breadcrumb>
                    <BreadcrumbItem ><a href="/">Home</a></BreadcrumbItem>
                    <BreadcrumbItem active>{this.props.onglet}</BreadcrumbItem>
                </Breadcrumb>
            </Container>
          </div>
    );
    }
}

export default Header