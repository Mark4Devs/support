import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    return (
    <header className="header">
          <Navbar className='bg-light' expand="lg" fixed='top'>
            <NavDropdown title="UK" className='dropdown'>
              <NavDropdown.Item href="#action/3.1" className='drop-item'>EN</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className='nav-bar'>
              <Nav className='navigation'>
              <Link to="/" className='link'>Головна</Link>
                <Link to="/activity" className='link'>Про нас</Link>
                <Link to="/activity" className='link'>Допомога</Link>
                <Link to="/activity" className='link'>Напрями діяльності</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </header>
    );
}

export default Header;