import Logo from '../images/Logo1.png'

import NavBar from "../components/NavBar"
import ScrollAnimation from "react-animate-on-scroll";

import Footer from "../components/Footer"
import { GlobalStyles } from "../components/GlobalStyles"
import { Root, Header, Heading, SubHeaidng, Introduction, MainInfo, Welcome, AboutMe, ProfileImgDiv, ProfileImg, MoreAboutMe, AboutMeRight, EducationDiv, Tittle, CoursesDiv, CoursesRef, PricesDiv, Prices, Offers, PriceBox, Subtext, B, PriceBox2, PriceBox3, Contact, ContactInfo, DivForm, Form, Input, TextArea, Button } from '../styles/styles'
import React from 'react'

import ProfileImage from '../images/profile-image.png'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'

import Head from 'next/head'

export default function Home() {
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
    <>
      <Head>
        <title>Patrycja Langa Psychotherapist </title>
      </Head>
      <GlobalStyles />
      <NavBar links={[{ name: 'About Me', id: 'aboutme' }, { name: 'Education', id: 'education' }, { name: 'Offers/Prices', id: 'offers-price' }, { name: 'Contact', id: 'contact' }]} image={Logo} />
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
            <br />
            <p> I am a member of the Polish Society for Cognitive and Behavioral Therapy and I work in accordance with the Code of Ethics and Professional Psychology of the Polish Psychological Society.</p>
            <br />
            <p> I gained my professional experience, mainly in the Crisis Intervention Center of the Foundation Dajemy Dzieciom Siłę in Gdańsk, as a crisis assistant, in the psychiatric ward at the Provincial Psychiatric Hospital of the name of prof. Tadeusz Bilikiewicz and in my private practice.</p>
          </AboutMeRight>
          <AboutMeRight>
            <br />
            <p>In my work, an individual approach to each client and the relationship we build together is extremely important. I work with full commitment and empathy, using tested and effective methods of help, mainly using the cognitive-behavioral approach and third wave approaches - ACT and motivating dialogue.</p>
            <br />
            <p>Taking care of the professionalism of the help provided, I regularly participate in trainings and conferences, constantly expanding my psychological and psychotherapeutic competences. I am subjecting my work to regular supervision by certified supervisors.</p>
            <br />
            <p>If you would like me to accompany you on your journey to the life worth living, do not hesitate to contact me.</p>
            <br />
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
              <br />
              <p>University of Gdańsk - Faculty of Social Sciences - Psychology (MA). Completed two scientific paths: Psychology of Organization, Management and Marketing, Psychology of Social Pathology and Psychology of the Judiciary and Penitentiary.
                Including the implemented program for the Pedagogical Preparation.</p>
              <br />
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
              <br />
              <p>Motivating dialogue - about sport, changing habits and lifestyle</p>
              <br />
              <p>Motivating dialogue as an alternative to the punishment</p>
              <br />
              <p>9th Cracow Conference of Psychology and Law</p>
              <br />
              <p>Developing the theory of mind</p>
              <br />
              <p>Quality of life with infertility, part II- psychological</p>
              <br />
              <p>Quality of life with infertility, part II- medical</p>
              <br />
              <p>Sexologist in the process of lifelong learning. II. Patient and a sexologist in the therapy process</p>
              <br />
              <p>Theory and therapeutic practice Between love and hate - about sexuality</p>
            </AboutMeRight>
            <AboutMeRight>
              <br />
              <p>Betrayal - problem or symptom? Psychotherapeutic work with a couple</p>
              <br />
              <p>Consensual non-monogamy in aid work</p>
              <br />
              <p>Psychosexual development of a child</p>
              <br />
              <p>The PLISSIT / IC model in assistive work with sexuality</p>
              <br />
              <p>Sexual violence - the perspective of victims and perpetrators</p>
              <br />
              <p>Child sexual abuse: recognition, support, reporting</p>
              <br />
              <p>Sex educators course</p>
              <br />
              <p>ACT revolution- series of trainings </p>
            </AboutMeRight>
          </CoursesRef>
        </CoursesDiv>
        <PricesDiv id='offers-price'>
          <Prices>Prices / Offers </Prices>
          <Offers>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox>
                <Subtext>Individual consultation online</Subtext>
                <p>This is our first meeting, the first step in recognizing the problems you are struggling with . Consultation may be a form of obtaining psychological advice, or an introduction to cognitive behavioral therapy. During such a meeting, we will jointly look at the problem you come across and decide on the best possible action. Usually it is one to couple meetings.</p>
                <B>£45 (online) or £55 (in studio)</B>
              </PriceBox>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox2>
                <Subtext>Individual psychotherapy online</Subtext>
                <p>Psychotherapy is a form of treating mental problems. My work is based mainly on the Cognitive-Behavioral approach and the third wave approaches - ACT and Motivating Dialogue. These are working methods with proven effectiveness. The techniques will be adapted to your needs and capabilities and the situation in which you are. Psychotherapy is a longer form of help, and the length of the process is set individually. Meetings are usually held once a week.</p>
                <B>£45 (online) or £55 (in studio)</B>
              </PriceBox2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox3>
                <Subtext>Crisis intervention online</Subtext>
                <p>Crisis intervention is deliberate psychological support in a short-term form (from a few to a dozen or so meetings). The sessions are aimed at returning to balance after experiencing a crisis in life and solving a problematic situation. The most common crisis situations are the experience of the loss of a loved one, an accident, life changes or any other stressful situation. I conduct these individual meetings mainly on the basis of the crisis intervention theory.</p>
                <B>£45 (online) or £55 (in studio)</B>
              </PriceBox3>
            </ScrollAnimation>
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
      <Footer linkText="Links to my network" />
    </>
  )
}


