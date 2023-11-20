
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Link from 'next/link';

export default function Header() {

  useEffect(() => {


  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const x = () => { }

  return (
    <div className='bg-dark'>
      <Navbar className='py-3 myNavbar container' color="dark" dark expand="md">
        <NavbarBrand className='navBrand' href="/">UnInfo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
              <NavItem>
              <Link className={`${styles.navLi} text-decoration-none mx-2`} href={'/signin'}>Signin</Link>
              </NavItem>

              <NavItem>
              <Link className={`${styles.navLi} text-decoration-none mx-2`} href={'/contact'}>Contact</Link>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
