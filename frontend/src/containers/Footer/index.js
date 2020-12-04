import React, { Component } from 'react'
import logo from '../../images/logo.png'
import {Container, Nav, Row, Col, NavItem} from 'reactstrap'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render () {
        return (
            <footer className="footer-distributed">
 
                <div className="footer-left">
                    <h3><span>Pneumatique AL-BARAKA</span></h3>
                    <img src={logo} />
                </div>
 
			    <div className="footer-center">         
                
			    </div>
			    
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the site web</span>
                        Gestion interne de la Société pneumatique AL-BARAKA 
                    </p>
                    <div className="footer-icons">
                        <a alt="0524342478" href="#"><FontAwesomeIcon icon={faPhone} /></a>
                        <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#"><FontAwesomeIcon icon={faMapMarker} /></a>
                    </div>
			    </div>
		</footer>
        )
    }
}

export default Footer