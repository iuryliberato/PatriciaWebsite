import styled from 'styled-components'
import { device } from '../styles/sizes'
import Image from 'next/image'

export const Button = styled.button`
border: none;
background: #EDEBDB;
font-family: 'Vollkorn', serif;
border-radius: 5px;
padding: 10px 100px;
font-size: 20px;
margin: 40px 0;
color: #6B6B6B;
cursor: pointer;
&:hover {
  background-color: #F9FCF8;
}
`
export const TextArea = styled.textarea`
border: 2px solid rgba(237,235,219,0.6);
background: #F9FCF8;
color: #343434;
border-radius: 5px;
padding: 0 0 0 10px;
font-family: 'Vollkorn', serif;
font-size: 17px;
`
export const Input = styled.input`
margin-bottom: 20px;
height: 40px;
border: 2px solid rgba(237,235,219,0.6);
background: #F9FCF8;
color: #343434;
border-radius: 5px;
font-family: 'Vollkorn', serif;
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
padding: 50px;
margin: 40px auto;

`
export const ContactInfo = styled.div`
font-family: 'Open Sans', sans-serif;
text-align: center;
`
export const Contact = styled.div`
background: #F9F8EF;
padding: 50px 20px;
@media ${device.biggerThanMobile}{
  padding: 50px 20px;
  font-size: 14px;
}

@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;

}
@media ${device.desktop}{
  padding: 80px 100px;
  font-size: 15px;
}
@media ${device.wide}{
  padding: 100px 200px;
}
`


export const B = styled.p`
font-family: 'Open Sans', sans-serif;
margin: 10px 0;
font-size: 16px;
`
export const PriceBox3 = styled.div`
padding: 0 50px;
background: #EDEBDB;
padding: 35px;
margin-bottom: 20px;
`
export const PriceBox2 = styled.div`
padding: 0 50px;
padding: 35px;
margin-bottom: 20px;
`
export const PriceBox = styled.div`
padding: 0 50px;
background: #F9F8EF;
padding: 35px;
margin-bottom: 20px;
`
export const Subtext = styled.div`
font-family: 'Simonetta', cursive;
font-size: 25px;
margin: 0 0 20px;
`
export const Offers = styled.div`
display: flex;
font-family: 'Open Sans', sans-serif;
flex-direction: Column;
}
@media ${device.biggerThanMobile}{
  flex-direction: Column;
}

@media ${device.tablet}{
  flex-direction: column;
}
@media ${device.desktop}{
  flex-direction: column;
}
@media ${device.wide}{
  flex-direction: row;
  display: flex;
}
`
export const PricesDiv = styled.div`
background: #F9FCF8;
padding: 50px 20px;
font-size: 14px;
@media ${device.biggerThanMobile}{
  padding: 50px 20px;
  font-size: 14px;
}

@media ${device.tablet}{
  padding: 80px 50px;
  font-size: 14px;

}
@media ${device.desktop}{
  padding: 80px 100px;
  font-size: 15px;
}
@media ${device.wide}{
  padding: 100px 200px;
}
`

export const Prices = styled.div`
font-family: 'Simonetta', cursive;
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
background: #F9F8EF;
padding: 50px 30px;
display: flex;
flex-direction: Column;
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
  padding: 80px 100px;
  font-size: 15px;
  flex-direction: column;
}
@media ${device.wide}{
  padding: 100px 200px;
  flex-direction: column;
  display: flex;
}
`
export const Tittle = styled.div`
font-family: 'Simonetta', cursive;
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
background: #EDEBDB;
padding: 50px 30px;
display: flex;
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
  padding: 80px 100px;
  font-size: 15px;
  flex-direction: row;
}
@media ${device.wide}{
  padding: 100px 200px;
  flex-direction: row;
}
`


export const AboutMeRight = styled.div`
font-family: 'Open Sans', sans-serif;
padding: 0 30px 0 0 ;

`
export const MoreAboutMe = styled.div`
background: #F9F8EF;
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
  padding: 80px 100px;
  font-size: 15px;
  flex-direction: row;
}
@media ${device.wide}{
  padding: 100px 200px;
  flex-direction: row;
}
`

export const ProfileImg = styled(Image)`
    
`
export const ProfileImgDiv = styled.div`
object-fit: fill;
position: relative;
width: 220px;
    height: 240px;
    padding: 20px 0 40px;
 @media ${device.biggerThanMobile}{
  width: 240px;
  height: 270px;
}

@media ${device.tablet}{
  width: 260px;
height: 280px;
}
@media ${device.desktop}{
  width: 280px;
height: 310px;
}
@media ${device.wide}{
  width: 300px;
height: 350px;
}
`
export const MainInfo = styled.div`

padding: 40px 20px;
@media ${device.biggerThanMobile}{
  width: 370px;
padding: 40px 20px;
}

@media ${device.tablet}{
  width: 270px;

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
font-family: 'Simonetta', cursive;
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
background-color: #F9FCF8;
padding: 20px;
display: flex;
    flex-direction: column;
    align-items: center;


@media ${device.biggerThanMobile}{
  flex-direction: row;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
}

@media ${device.tablet}{
  padding: 120px 80px;
 
}

@media ${device.desktop}{
  padding: 130px 100px;
}
@media ${device.wide}{
  padding: 150px 200px;
}
`



export const SubHeaidng = styled.h2`
color: white;
display: flex;
justify-content: center;
font-size: 15px;
font-family: 'Open Sans', sans-serif;
font-weight: bold;
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
font-family: 'Vollkorn', serif;
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
margin-right: 200px;
}
`