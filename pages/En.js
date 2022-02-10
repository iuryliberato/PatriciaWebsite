import Logo from '../images/Logo1.png'

import NavBar from "../components/NavBar"
import ScrollAnimation from "react-animate-on-scroll";

import Footer from "../components/Footer"
import { GlobalStyles } from "../components/GlobalStyles"
import { Root, Header, Heading, SubHeaidng, Introduction, SeeYou, MainInfo, Welcome, AboutMe, ProfileImgDiv, ProfileImg, MoreAboutMe, AboutMeRight, EducationDiv, Tittle, CoursesDiv, CoursesRef, PricesDiv, Prices, Offers, PriceBox, Subtext, B, PriceBox2, PriceBox3, Contact, ContactInfo, DivForm, Form, Input, TextArea, Button } from '../styles/styles'
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
      <NavBar links={[{ name: 'About Me', id: 'aboutme' }, { name: 'Education', id: 'education' }, { name: 'Courses/ Conferencies', id: 'conferencies' }, { name: 'Offers', id: 'offers-price' }, { name: 'Contact', id: 'contact' }]} image={Logo} />
      <Root>
        <Header>
          <Heading>Patrycja Langa</Heading>
          <SubHeaidng>Psychologist | Psychotherapist</SubHeaidng>
        </Header>

        <Introduction id="aboutme">

          <MainInfo>
            <Welcome >Welcome!</Welcome>
            <AboutMe>I am a psychologist and a&nbsp;CBT psychotherapist in&nbsp;the process of&nbsp;certification, working in&nbsp;London and online. I mainly work with individuals who&nbsp;experience anxiety, depression, problems with sleeping, crises or&nbsp;traumas, and&nbsp;people who struggle with&nbsp;stress, and&nbsp;sexual problems.</AboutMe>
          </MainInfo>
          <ProfileImgDiv>
            <ProfileImg layout="fill" src={ProfileImage} alt='Profile Image' />
          </ProfileImgDiv>

        </Introduction>
        <MoreAboutMe>

          <AboutMeRight>
            <p>Currently I’m&nbsp;during a&nbsp;comprehensive, 4-year training in&nbsp;cognitive- behavioral therapy with&nbsp;a&nbsp;motivating dialogue organized by&nbsp;the&nbsp;Akademia Motywacji i&nbsp;Edukacji, recommended by&nbsp;the&nbsp;Polish Society for&nbsp;Cognitive and&nbsp;Behavioral Therapy and&nbsp;the&nbsp;European Society for&nbsp;Cognitive and&nbsp;Behavioral Therapy.</p>
            <br />
            <p>I graduated from the&nbsp;University of&nbsp;Gdańsk with&nbsp;master degree in&nbsp;psychology with&nbsp;two academic paths: Psychology of&nbsp;Social Pathologies and Psychology of&nbsp;the&nbsp;Judiciary-Penitentiary and&nbsp;Psychology of&nbsp;Organization, Management and Marketing. In&nbsp;addition to&nbsp;that I’m also a&nbsp;sex educator and&nbsp;crisis assistant. </p>
            <br />
            <p>I’m a member of the Polish Society for&nbsp;Cognitive and Behavioral Therapy and I&nbsp;work in&nbsp;accordance with&nbsp;the&nbsp;Code of&nbsp;Ethics and&nbsp;Professional Psychology of&nbsp;the&nbsp;Polish Psychological Society.</p>
            <br />
            <p>I gained my professional experience as&nbsp;a&nbsp;crisis assistance in&nbsp;the&nbsp;Crisis Intervention Center of&nbsp;the&nbsp;Foundation Dajemy Dzieciom Siłę in&nbsp;Gdańsk, then through the&nbsp;psychiatric ward under the&nbsp;name of&nbsp;prof. Tadeusz Bilikiewicz in&nbsp;Gdańsk, and&nbsp;finally in&nbsp;my&nbsp;private practice.</p>
            <br />
          </AboutMeRight>
          <AboutMeRight>

            <p>An individual approach to each client and&nbsp;the relationship we build together is&nbsp;extremely important. I work with full&nbsp;commitment and&nbsp;empathy, using tested and&nbsp;effective methods, using mainly the&nbsp;cognitive-behavioral approach and&nbsp;third wave approaches - ACT and&nbsp;motivating dialogue.</p>
            <br />
            <p>I regularly participate in trainings and&nbsp;conferences, constantly expanding my psychological and psychotherapeutic competences. I&nbsp;subject my&nbsp;work to&nbsp;certified supervisors.</p>
            <br />
            <p>If you would like me to accompany you on&nbsp;your journey to the&nbsp;life worth living, do not&nbsp;hesitate to contact me.</p>
            <br />
            <SeeYou>
              <p>See you soon!</p>
            </SeeYou>
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
              <p>University of Gdańsk - Faculty of Social Sciences - Psychology (MA). Completed two&nbsp;scientific paths: Psychology of&nbsp;Organization, Management and&nbsp;Marketing, Psychology of&nbsp;Social Pathology and&nbsp;Psychology of&nbsp;the&nbsp;Judiciary and&nbsp;Penitentiary.
                Including the implemented program for the Pedagogical Preparation.</p>
              <br />
              <p>Universita degli Studi di Milano-Bicocca-Psicologia</p>
            </AboutMeRight>
          </div>

        </EducationDiv>
        <CoursesDiv id='conferencies'>

          <Tittle>
            Courses and Conferences
          </Tittle>
          <CoursesRef>
            <AboutMeRight>
              <p>Therapeutic work with patients with insomnia - effective interventions</p>
              <br />
              <p>Perfectionism - How Cognitive Behavioral Therapy&nbsp;and Rational&nbsp;Behavior Therapy can&nbsp;help</p>
              <br />
              <p>In the trap of procrastination - techniques of change</p>
              <br />
              <p>How to enrich DBT with Motivating Dialogue</p>
              <br />
              <p>Motivating dialogue - about sport, changing habits and&nbsp;lifestyle</p>
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


            </AboutMeRight>
            <AboutMeRight>
              <p>Sexologist in the process of lifelong learning. II. Patient and a sexologist in&nbsp; the&nbsp;therapy process</p>
              <br />
              <p>Theory and therapeutic practice Between love and hate - about sexuality</p>
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
          <Prices> Offers </Prices>
          <Offers>
            <PriceBox animateIn="fadeInRight" animateOnce >

              <Subtext>Individual consultation </Subtext>
              <p>In our first meeting the first step will&nbsp;be&nbsp;recognising problems you&nbsp;are&nbsp;struggling with. Consultation may be&nbsp;a&nbsp;form of&nbsp;obtaining psychological advice, or&nbsp;an&nbsp;introduction to cognitive behavioral therapy. During such a meeting, we will&nbsp;jointly look at&nbsp;any problems you&nbsp;come across and decide on&nbsp;the best possible action. Usually it&nbsp;is one to&nbsp;couple meetings.</p>
              <B>£45 (online) or £55 (in studio)</B>

            </PriceBox>
            <PriceBox2 animateIn="fadeInRight" animateOnce >

              <Subtext>Individual psychotherapy</Subtext>
              <p>Psychotherapy is a form of treating mental problems. My work is based mainly on the Cognitive-Behavioral approach and the third wave approaches - ACT and Motivating Dialogue. These are working methods with proven effectiveness. The techniques will be adapted to your needs and capabilities and the situation in which you are. Psychotherapy is a longer form of help and the length of the process is set individually. Meetings are usually held once a week.</p>
              <B>£45 (online) or £55 (in studio)</B>
            </PriceBox2>
            <PriceBox3 animateIn="fadeInRight" animateOnce >

              <Subtext>Crisis intervention</Subtext>
              <p>Crisis intervention is deliberate psychological support in a short-term form (from a few to a dozen or so meetings). The sessions are aimed at returning to balance after experiencing a crisis in life and solving a problematic situation. The most common crisis include: the loss of a loved one, an accident, life changes or any other stressful situation. I conduct these individual meetings mainly on the basis of the crisis intervention theory.</p>
              <B>£45 (online) or £55 (in studio)</B>

            </PriceBox3>
          </Offers>
        </PricesDiv>
        <Contact id='contact'>
          <Prices>Contact </Prices>
          <ContactInfo>
            To arrange a session, please contact me by filling out the form or by writing to the e-mail address provided below.
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


