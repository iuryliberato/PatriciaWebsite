import styled from 'styled-components'
import { device } from '../styles/sizes'
import Image from 'next/image'
import ScrollAnimation from "react-animate-on-scroll";


export const Button = styled.button`
border: none;
background: #D8D8D8;
font-family: 'Cormorant', serif;
font-weight: bold;
border-radius: 5px;
padding: 10px 100px;
font-size: 20px;
margin: 40px 0 10px;
color: #404040;
cursor: pointer;
&:hover {
  background-color: white;
}
`
export const SeeYou = styled.div`
display: flex;
justify-content: flex-end;
margin: 60px 20px 0px;
font-size: 16px;
`
export const TextArea = styled.textarea`
border: 1px solid rgba(237,235,219,0.6);
background: white;
color: #343434;
border-radius: 5px;
padding: 5px 0 0 10px;
font-family: 'Cormorant', serif;
font-size: 17px;
`
export const Input = styled.input`
margin-bottom: 20px;
height: 40px;
border: 1px solid rgba(237,235,219,0.6);
background: white;
color: #343434;
border-radius: 5px;
font-family: 'Cormorant', serif;
padding: 0 0 0 10px;
font-size: 17px;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
width: 600px;
`
export const DivForm = styled.div`
display: flex;
justify-content: center;
padding: 20px;
margin: 20px auto;

`
export const ContactInfo = styled.div`
font-family: 'Open Sans', sans-serif;
text-align: center;
`
export const Contact = styled.div`
background: #F0F0F0;
padding: 30px 20px;
line-height: 20px;
@media ${device.biggerThanMobile}{
  padding: 50px 20px;
  font-size: 14px;
  line-height: 20px;
}

@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;
  

}
@media ${device.desktop}{
  padding: 80px 100px;
  font-size: 15px;
  line-height: 20px;
}
@media ${device.wide}{
  padding: 100px 200px;
}
`


export const B = styled.p`
font-family: 'Open Sans', sans-serif;
margin: 10px 0;
font-size: 15px;
`

const PriceBoxLayout = styled(ScrollAnimation)`
padding: 30px 25px;
margin-bottom: 20px;
width: 100%;
border-radius: 5px;
@media ${device.desktop}{
  width: 33%;
  
}

`
export const PriceBox3 = styled(PriceBoxLayout)`
background: white;
`
export const PriceBox2 = styled(PriceBoxLayout)`
background: white;
`
export const PriceBox = styled(PriceBoxLayout)`
background: white;
`
export const Subtext = styled.div`
font-family: 'Cormorant', serif;
font-size: 25px;
margin: 0 0 20px;
`
export const Offers = styled.div`
display: flex;
font-family: 'Open Sans', sans-serif;
flex-direction: Column;
overflow: hidden;
gap: 20px;
}
@media ${device.biggerThanMobile}{
  flex-direction: Column;
}

@media ${device.tablet}{
  flex-direction: column;
}
@media ${device.desktop}{
  flex-direction: row;
}
@media ${device.wide}{
  flex-direction: row;
  display: flex;
}
`
export const PricesDiv = styled.div`
background: #F6F6F6;
padding: 50px 20px;
font-size: 14px;
@media ${device.biggerThanMobile}{
  padding: 50px 20px;
  font-size: 14px;
}

@media ${device.tablet}{
  padding: 30px 30px;
  font-size: 14px;

}
@media ${device.desktop}{
  padding: 30px 30px;
  font-size: 14px;
}
@media ${device.wide}{
  padding: 50px 60px;
}
`

export const Prices = styled.div`
font-family: 'Cormorant', serif;
font-size: 30px;
display: flex;
justify-content: center;
margin: 50px 0 90px;
@media ${device.biggerThanMobile}{
  font-size: 35px;
}

@media ${device.tablet}{
  font-size: 40px;

}
@media ${device.desktop}{
  font-size: 45px;
}
@media ${device.wide}{
  font-size: 45px;
}
`

export const CoursesRef = styled.div`
display: flex;
flex-direction: Column;
@media ${device.biggerThanMobile}{
  flex-direction: Column;
}

@media ${device.tablet}{
  flex-direction: row;
}
@media ${device.desktop}{
  flex-direction: row;
}
@media ${device.wide}{
  flex-direction: row;
  display: flex;
}
`

export const CoursesDiv = styled.div`
background: white;
padding: 50px 30px;
display: flex;
flex-direction: Column;
font-size: 13px;
@media ${device.biggerThanMobile}{
  padding: 50px 30px;
  font-size: 14px;
  flex-direction: Column;
}

@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;
  flex-direction: column;
}
@media ${device.desktop}{
  padding: 50px 80px;
  font-size: 14px;
  flex-direction: column;
}
@media ${device.wide}{
  padding: 70px 100px;
  flex-direction: column;
  display: flex;
}
`



export const Tittle = styled.div`
font-family: 'Cormorant', serif;
font-size: 30px;
margin: 20px 0;
@media ${device.biggerThanMobile}{
  font-size: 35px;
}

@media ${device.tablet}{
  font-size: 40px;

}
@media ${device.desktop}{
  font-size: 45px;
}
@media ${device.wide}{
  font-size: 45px;
}
`

export const EducationDiv = styled.div`
background: #F0F0F0;
padding: 50px 30px;
display: flex;
font-size: 13px;
@media ${device.biggerThanMobile}{
  padding: 50px 30px;
  font-size: 14px;
}
@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;
  flex-direction: row;
}
@media ${device.desktop}{
  padding: 50px 80px;
  font-size: 15px;
  flex-direction: row;
}
@media ${device.wide}{
  padding: 70px 100px;
  flex-direction: row;
}
`


export const AboutMeRight = styled.div`
font-family: 'Open Sans', sans-serif;
padding: 0 30px 0 0 ;

`
export const MoreAboutMe = styled.div`
background: #F6F6F6;
display: flex;
flex-direction: column;
font-size: 13px;
padding: 50px 30px;
@media ${device.biggerThanMobile}{
  padding: 50px 30px;
  font-size: 14px;
 
}

@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;
  flex-direction: row;
}
@media ${device.desktop}{
  padding: 50px 80px;
  font-size: 15px;
  flex-direction: row;
}
@media ${device.wide}{
  padding: 70px 100px;
  flex-direction: row;
}
`

export const ProfileImg = styled(Image)`
    
`
export const ProfileImgDiv = styled.div`
object-fit: fill;
position: relative;
width: 220px;
    height: 250px;
    padding: 20px 0 40px;
 @media ${device.biggerThanMobile}{
  width: 240px;
  height: 270px;
}

@media ${device.tablet}{
  width: 250px;
height: 290px;
}
@media ${device.desktop}{
  width: 280px;
height: 310px;
}
@media ${device.wide}{
  width: 320px;
height: 350px;
}
`
export const MainInfo = styled.div`

padding: 40px 20px;
@media ${device.biggerThanMobile}{
  width: 250px;
padding: 40px 0px;

}

@media ${device.tablet}{
  width: 250px;

}

@media ${device.desktop}{
  width: 300px;

}
@media ${device.wide}{
  width: 350px;

}
`
export const AboutMe = styled.p`
font-size: 14px;
font-family: 'Open Sans', sans-serif;
@media ${device.desktop}{
  font-size: 15px;
}
`
export const Welcome = styled.div`
font-family: 'Cormorant', serif;
color: #1D1D1D;
font-size: 30px;
padding: 0 0 7px;
@media ${device.tablet}{
  font-size: 37px;
  padding: 0 0 10px;
}
@media ${device.desktop}{
  font-size: 40px;
  padding: 0 0 15px;
}
`
export const Introduction = styled.div`
background-color: white;
padding: 20px;
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;


@media ${device.biggerThanMobile}{
  flex-direction: row;
  padding: 100px 20px 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

@media ${device.tablet}{
  padding: 60px 30px 60px;
  gap: 50px;
 
}

@media ${device.desktop}{
  padding: 60px 50px 60px;
  gap: 50px;
}
@media ${device.wide}{
  padding: 60px 100px 60px;
  gap: 70px;
}
`



export const SubHeaidng = styled.h2`
color: white;
display: flex;
justify-content: center;
font-size: 15px;
font-family: 'Open Sans', sans-serif;
font-weight: bold;
margin-top: 20px;
@media ${device.biggerThanMobile}{
  font-size: 17px;
}
@media ${device.tablet}{
  font-size: 20px;
}
@media ${device.desktop}{
  font-size: 22px;

}
`
export const Heading = styled.h1`
color: #EDEDED;
display: flex;
justify-content: center;
font-size: 45px;
padding-top: 90px;
@media ${device.biggerThanMobile}{
  font-size: 75px;
padding-top: 100px;
}
@media ${device.tablet}{
  font-size: 85px;
padding-top: 145px;
}
@media ${device.desktop}{
  padding-top: 180px;
  font-size: 90px;
}
`

export const Header = styled.div`
background-image: url(/headerImg3.png);
height: 300px;
background-size: cover;
background-position: center;
width: 100%;
font-family: 'Cormorant', serif;
font-weight: bold;
@media ${device.biggerThanMobile}{
  height: 400px;
}
@media ${device.tablet}{
  height: 500px;
}
@media ${device.desktop}{
height: 600px;
}

`
export const Root = styled.main`
margin-right: none;
@media ${device.desktop}{
margin-right: 230px;
}
`