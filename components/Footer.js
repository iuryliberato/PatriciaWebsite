
import React from 'react'
import styled from 'styled-components'
import { device } from './sizes'


const Footer = () => {


  return (

    <FooterDiv>
      <Network>
        Links to my network:
      </Network>
      <LinksFooter>
        <Links target="blank" href="https://www.znanylekarz.pl/patrycja-langa/psycholog/gdansk">Znany lekarz</Links>
        <Links target="blank" href="https://twojpsycholog.pl/profil-psychologa/patrycja-langa-1089">Twój psycholog</Links>
        <Links target="blank" href="https://sensly.com/patrycja-langa">Sensly</Links>
      </LinksFooter>
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
background: #EDEBDB;
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
const LinksFooter = styled.div`
display: flex;
justify-content: center;
gap: 20px;
@media ${device.biggerThanMobile}{
  gap: 20px
}
@media ${device.tablet}{
  gap: 30px;
}
@media ${device.desktop}{
  gap: 30px;
}
@media ${device.wide}{
  gap: 30px;
}

`

const Links = styled.a`
font-family: 'Vollkorn', serif;
font-size: 16px;
color: #5B5B5B;
text-decoration: none;
border-radius: 10px;

&:hover {
  background-color: #F9FCF8;
  padding: 5px 10px;
}
@media ${device.biggerThanMobile}{
  margin-right: 0;
  font-size: 18px;
}
@media ${device.tablet}{
  margin-right: 0;
  font-size: 19px;
}
@media ${device.desktop}{

  font-size: 20px;
}
@media ${device.wide}{
  
  font-size: 23px;
}
`

export default Footer