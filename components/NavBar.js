import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { device } from './sizes'

import Logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setMenuOpen(false)
    };


    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  const handleMenuLink = () => {
    setMenuOpen(false)
  }
  return (
    <>
      <MenuButton onClick={() => setMenuOpen(true)}>
        <DivHamburguer1 />
        <DivHamburguer2 />
        <DivHamburguer3 />
      </MenuButton>

      <MenuBackground menuOpen={menuOpen}></MenuBackground>
      <NavContainerMenu ref={drawerRef} menuOpen={menuOpen}>
        <Close>
          <span onClick={() => setMenuOpen(false)} ><FontAwesomeIcon icon={faTimes} /></span>
        </Close>
        <Logodisplay><LogoType src={Logo} alt="working" /></Logodisplay>
        <NavLinks>
          <NavLink onClick={handleMenuLink} href="#aboutme">About Me</NavLink>
          <NavLink onClick={handleMenuLink} href="#education">Education</NavLink>
          <NavLink onClick={handleMenuLink} href="#prices">Offers/Prices</NavLink>
          <NavLink onClick={handleMenuLink} href="#contact">Contact</NavLink>
        </NavLinks>
        <div>
          <Name>Patrycja Langa </Name>
          <Number href="tel:+4407440561736">(+44)07440561736</Number>
          <Email target="blank" href="mailto:psychologpatrycjalanga@gmail.com"> psychologpatrycjalanga@gmail.com</Email>
        </div>
      </NavContainerMenu>

    </>

  )
}
const DivHamburguer3 = styled.div`
background: #EDEDED;
height: 2px;
margin: 4px;
`
const DivHamburguer2 = styled.div`
background: #EDEDED;
height: 2px;
margin: 4px;
`
const DivHamburguer1 = styled.div`
background: #EDEDED;
height: 2px;
margin: 4px;
`
const Close = styled.div`
font-size: 17px;
margin:  0 0 0 180px;
color: gray;
cursor: pointer;

@media ${device.desktop} {
    display: none;
  }
  `
const MenuButton = styled.button`
margin-top: 15px;
height: 40px;
width: 40px;
background: none;
border-radius: 2px;
    outline: 0 none;
    border: 0 none;
    display: block;
    align-items: center;
    position: fixed;
    right: 20px;
    cursor: pointer;
    @media ${device.desktop} {
    display: none;
  }
    
`

const MenuBackground = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(214, 214, 214, 0.7);
  z-index: 1000;
  opacity: ${props => props.menuOpen ? 1 : 0};
  pointer-events: none;
  transition: opacity 0.5s;

  @media ${device.desktop} {
    display: none;
  }
`


const Email = styled.a`
display: flex;
justify-content: center;
font-size: 13px;
color: #353535;
text-decoration: none;
`
const Number = styled.a`
display: flex;
justify-content: center;
color: #454545;
font-size: 13px;
margin: 5px auto 5px;
text-decoration: none;
`
const Name = styled.div`
display: flex;
justify-content: center;
color: #4D4D4D;
font-size: 20px;
`

const NavLinks = styled.div`
margin: 20px auto 30px;
`
const NavLink = styled.a`
display: flex;
justify-content: center;
color: #4D4D4D;
text-decoration: none;
margin: 25px auto;
font-size: 16px;
letter-spacing: 0.7px;
position: relative;

  &::after {
  position: absolute;
  content: "";
  width: 0%;
  height: 1px;
  background-color: #959595;
  left: 50%;
  bottom: -10px;
  transition: all 0.1s ease-in-out;
}
  &:hover::after{
  left: 0;
  width: 100%;
}

`

const LogoType = styled(Image)`
width: 170px;
height: 130px;
`
const Logodisplay = styled.div`
display: flex;
justify-content: center;
margin: 20px;
`
const NavContainerMenu = styled.div`
transform: ${props => props.menuOpen ? 'translate(0, 0)' : 'translate(100%, 0)'};
transition: transform 150ms ease-in;
width: 230px;
position: fixed;
top: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
font-family: 'Simonetta', cursive;
justify-content: start;
background-color: #FCFCFC;
padding: 20px 0 30px;
z-index: 2000;
gap: 10px;

@media ${device.desktop} {
  transform: translate(0, 0);
  justify-content: space-between;
}
`
export default NavBar