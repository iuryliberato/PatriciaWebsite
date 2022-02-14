
import React from 'react'
import styled from 'styled-components'
import { device } from './sizes'
import { BsInstagram, BsFacebook } from 'react-icons/bs'






const Footer = ({ linkText }) => {


  return (

    <FooterDiv>
      <Network>
        {linkText}:
      </Network>
      <CenterLinks>
        <LinksFooter>
          <Links target="blank" href="https://www.facebook.com/Psycholog-Ptrycja-Langa-103486695580486"><BsFacebook /></Links>
          <Links target="blank" href="https://www.instagram.com/psychologpatrycjalanga/"><BsInstagram /></Links>
        </LinksFooter>
      </CenterLinks>
      <Copy target="blank" href="https://github.com/iuryliberato">&copy; 2022 Iury Liberato</Copy>
    </FooterDiv>


  )
}
const Network = styled.div`
font-family: 'Vollkorn', serif;
margin: 0 0 40px;
color: #6B6B6B;
font-size: 15px;
display: flex;
justify-content: center;
`

const Copy = styled.a`
color: #6B6B6B;
font-size: 14px;
margin: 60px 0 0 0;
text-decoration: none;
display: flex;
justify-content: center;
`
const FooterDiv = styled.div`
background: #E0E0E0;
display: flex;
flex-direction: column;
margin-right: 0;
padding: 50px 20px 70px;

@media ${device.biggerThanMobile}{
  margin-right: 0;
  padding: 50px 20px 70px;
}
@media ${device.tablet}{
  margin-right: 0;
  padding: 50px 20px 70px;
}
@media ${device.desktop}{
  margin-right: 200px;
}
@media ${device.wide}{
  margin-right: 200px;
  padding: 50px 0 70px;

}
`
const CenterLinks = styled.div`
display: flex;
justify-content: center;
`
const LinksFooter = styled.div`
display: flex;
justify-content: space-around;
width: 200px;

@media ${device.biggerThanMobile}{
  width: 200px;

}
@media ${device.tablet}{
  width: 250px;

}
@media ${device.desktop}{
  width: 300px;

}
@media ${device.wide}{
  width: 300px;

  
}

`

const Links = styled.a`
font-family: 'Vollkorn', serif;
color: #5B5B5B;
text-decoration: none;
border-radius: 10px;
font-size: 25px;

&:hover {
  &:hover {
    transform: scale(1.3);
    color: #f6f6f6;
  }

}
@media ${device.biggerThanMobile}{
  margin-right: 0;
  font-size: 27px;
}
@media ${device.tablet}{
  margin-right: 0;
  font-size: 33px;
}
@media ${device.desktop}{

  font-size: 33px;
}
@media ${device.wide}{
  
  font-size: 33px;
}
`

export default Footer