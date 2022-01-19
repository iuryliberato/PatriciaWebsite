
import React from 'react'
import styled from 'styled-components'
import ProfileImage from '../images/profile-image.png'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import { device } from './sizes'
import Image from 'next/image'

const Main = () => {

  const { register, handleSubmit } = useForm()

  const SERVICE_ID = "service_wa66mlq";
  const TEMPLATE_ID = "template_xpdc4in";
  const USER_ID = "user_DXJ5QHedTTYQaN3PyRF9K";

  const onSubmit = (values) => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, values, USER_ID)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
  }

  return (
    <Root>
      <Header>
        <Heading>Patrycja Langa</Heading>
        <SubHeaidng>Psychologist | Psychotherapist</SubHeaidng>
      </Header>

      <Introduction id="aboutme">

        <MainInfo>
          <Welcome >Welcome!</Welcome>
          <AboutMe>I am a psychologist and psychotherapist during a comprehensive, 4-year training in cognitive- behavioral therapy with a motivating dialogue organized by the Akademia Motywacji i Edukacji, recommended by the Polish Society for Cognitive and Behavioral Therapy and the European Society for Cognitive and Behavioral Therapy.</AboutMe>
        </MainInfo>
        <ProfileImgDiv>
          <ProfileImg layout="fill" src={ProfileImage} alt='Profile Image' />
        </ProfileImgDiv>

      </Introduction>
      <MoreAboutMe>

        <AboutMeRight>
          <p>I have graduated from the University of Gdańsk with master degree in psychology with two academic paths: Psychology of Social Pathologies and Psychology of the Judiciary-Penitentiary and Psychology of Organization, Management and Marketing. In addition to that I am also a sex educator and crisis assistant. </p>
          <p> I am a member of the Polish Society for Cognitive and Behavioral Therapy and I work in accordance with the Code of Ethics and Professional Psychology of the Polish Psychological Society.</p>
          <p> I gained my professional experience, mainly in the Crisis Intervention Center of the Foundation Dajemy Dzieciom Siłę in Gdańsk, as a crisis assistant, in the psychiatric ward at the Provincial Psychiatric Hospital of the name of prof. Tadeusz Bilikiewicz and in my private practice.</p>
        </AboutMeRight>
        <AboutMeRight>
          <p>In my work, an individual approach to each client and the relationship we build together is extremely important. I work with full commitment and empathy, using tested and effective methods of help, mainly using the cognitive-behavioral approach and third wave approaches - ACT and motivating dialogue.</p>
          <p>Taking care of the professionalism of the help provided, I regularly participate in trainings and conferences, constantly expanding my psychological and psychotherapeutic competences. I am subjecting my work to regular supervision by certified supervisors.</p>
          <p>If you would like me to accompany you on your journey to the life worth living, do not hesitate to contact me.</p>
          <p>See you soon!</p>
        </AboutMeRight>
      </MoreAboutMe>
      <EducationDiv id='education'>
        <div>
          <Tittle>
            Education
          </Tittle>
          <AboutMeRight>
            <p>Akademia Motywacji I Edukacji - comprehensive training in Cognitive - Behavioral Therapy with Motivating Dialogue</p>
            <p>University of Gdańsk - Faculty of Social Sciences - Psychology (MA). Completed two scientific paths: Psychology of Organization, Management and Marketing, Psychology of Social Pathology and Psychology of the Judiciary and Penitentiary.
              Including the implemented program for the Pedagogical Preparation.</p>
            <p>Universita degli Studi di Milano-Bicocca- Psicologia</p>
          </AboutMeRight>
        </div>

      </EducationDiv>
      <CoursesDiv>

        <Tittle>
          Courses and conferences
        </Tittle>
        <CoursesRef>
          <AboutMeRight>
            <p>How to enrich DBT with Motivating Dialogue</p>
            <p>Motivating dialogue - about sport, changing habits and lifestyle</p>
            <p>Motivating dialogue as an alternative to the punishment</p>
            <p>9th Cracow Conference of Psychology and Law</p>
            <p>Developing the theory of mind</p>
            <p>Quality of life with infertility, part II- psychological</p>
            <p>Quality of life with infertility, part II- medical</p>
            <p>Sexologist in the process of lifelong learning. II. Patient and a sexologist in the therapy process</p>
            <p>Theory and therapeutic practice "Between love and hate - about sexuality"</p>
          </AboutMeRight>
          <AboutMeRight>
            <p>Betrayal - problem or symptom? Psychotherapeutic work with a couple</p>
            <p>Consensual non-monogamy in aid work</p>
            <p>Psychosexual development of a child</p>
            <p>The PLISSIT / IC model in assistive work with sexuality</p>
            <p>Sexual violence - the perspective of victims and perpetrators</p>
            <p>Child sexual abuse: recognition, support, reporting</p>
            <p>Sex educators course</p>
            <p>ACT revolution- series of trainings </p>
          </AboutMeRight>
        </CoursesRef>
      </CoursesDiv>
      <PricesDiv id='prices'>
        <Prices>Prices / Offers </Prices>
        <Offers>
          <PriceBox>
            <Subtext>Individual consultation online</Subtext>
            <p>This is our first meeting, the first step in recognizing the problems you are struggling with . Consultation may be a form of obtaining psychological advice, or an introduction to cognitive behavioral therapy. During such a meeting, we will jointly look at the problem you come across and decide on the best possible action. Usually it is one to couple meetings.</p>
            <B>£45 (online) or £55 (in studio)</B>
          </PriceBox>
          <PriceBox2>
            <Subtext>Individual psychotherapy online</Subtext>
            <p>Psychotherapy is a form of treating mental problems. My work is based mainly on the Cognitive-Behavioral approach and the third wave approaches - ACT and Motivating Dialogue. These are working methods with proven effectiveness. The techniques will be adapted to your needs and capabilities and the situation in which you are. Psychotherapy is a longer form of help, and the length of the process is set individually. Meetings are usually held once a week.</p>
            <B>£45 (online) or £55 (in studio)</B>
          </PriceBox2>
          <PriceBox3>
            <Subtext>Crisis intervention online</Subtext>
            <p>Crisis intervention is deliberate psychological support in a short-term form (from a few to a dozen or so meetings). The sessions are aimed at returning to balance after experiencing a crisis in life and solving a problematic situation. The most common crisis situations are the experience of the loss of a loved one, an accident, life changes or any other stressful situation. I conduct these individual meetings mainly on the basis of the crisis intervention theory.</p>
            <B>£45 (online) or £55 (in studio)</B>
          </PriceBox3>
        </Offers>
      </PricesDiv>
      <Contact id='contact'>
        <Prices>Contact </Prices>
        <ContactInfo>
          Currently, all meetings are held online via the messenger of our choice (no need to install anything). To arrange a session, please contact me by filling out the form or by writing to the e-mail address provided below.
        </ContactInfo>
        <DivForm>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register("email", { required: true })} placeholder='Email…' type="email" />
            <Input {...register("name", { required: true })} placeholder='Name…' type="text" />
            <TextArea {...register("message", { required: true })} placeholder='Message…' rows="5" />
            <Button type='submit' color='green'>Send</Button>
          </Form>
        </DivForm>
      </Contact>
    </Root>
  )
}

const Button = styled.button`
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
const TextArea = styled.textarea`
border: 2px solid rgba(237,235,219,0.6);
background: #F9FCF8;
color: #343434;
border-radius: 5px;
padding: 0 0 0 10px;
font-family: 'Vollkorn', serif;
font-size: 17px;
`
const Input = styled.input`
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
const Form = styled.form`
display: flex;
flex-direction: column;
width: 600px;
`
const DivForm = styled.div`
display: flex;
justify-content: center;
padding: 50px;
margin: 40px auto;

`
const ContactInfo = styled.div`
font-family: 'Open Sans', sans-serif;
text-align: center;
`
const Contact = styled.div`
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


const B = styled.p`
font-family: 'Open Sans', sans-serif;
margin: 10px 0;
font-size: 16px;
`
const PriceBox3 = styled.div`
padding: 0 50px;
background: #EDEBDB;
padding: 35px;
margin-bottom: 20px;
`
const PriceBox2 = styled.div`
padding: 0 50px;
padding: 35px;
margin-bottom: 20px;
`
const PriceBox = styled.div`
padding: 0 50px;
background: #F9F8EF;
padding: 35px;
margin-bottom: 20px;
`
const Subtext = styled.div`
font-family: 'Simonetta', cursive;
font-size: 25px;
margin: 0 0 20px;
`
const Offers = styled.div`
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
const PricesDiv = styled.div`
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

const Prices = styled.div`
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





const CoursesRef = styled.div`
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

const CoursesDiv = styled.div`
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
const Tittle = styled.div`
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

const EducationDiv = styled.div`
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


const AboutMeRight = styled.div`
font-family: 'Open Sans', sans-serif;
padding: 0 30px 0 0 ;

`
const MoreAboutMe = styled.div`
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

const ProfileImg = styled(Image)`
    
`
const ProfileImgDiv = styled.div`
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
const MainInfo = styled.div`

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
const AboutMe = styled.p`
font-size: 14px;
font-family: 'Open Sans', sans-serif;
@media ${device.desktop}{
  font-size: 15px;
}
`
const Welcome = styled.div`
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
const Introduction = styled.div`
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



const SubHeaidng = styled.h2`
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
const Heading = styled.h1`
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

const Header = styled.div`
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
const Root = styled.main`
margin-right: none;
@media ${device.desktop}{
margin-right: 200px;
}
`
export default Main