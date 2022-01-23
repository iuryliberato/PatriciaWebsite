import NavBar from "../components/NavBar"
import Logo2 from '../images/Logo2.png'
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
          title: 'Wiadomość wysłano poprawnie'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Uuups, Coś pozło nie tak',
          text: error.text,
        })
      });
  }
  return (
    <>
      <Head>
        <title>Patrycja Langa Psychoterapeutką </title>
      </Head>
      <GlobalStyles />
      <NavBar links={[{ name: 'O mnie', id: 'O-mnie' }, { name: 'Edukacja', id: 'Edukacja' }, { name: 'Oferta', id: 'Oferta' }, { name: 'Kontakt', id: 'Kontakt' }]} image={Logo2} />
      <Root>
        <Header>
          <Heading>Patrycja Langa</Heading>
          <SubHeaidng>Psycholożką | Psychoterapeutką</SubHeaidng>
        </Header>

        <Introduction id="O-mnie">

          <MainInfo>
            <Welcome >Witaj!</Welcome>
            <AboutMe>Jestem psycholożką i psychoterapeutką w trakcie 4-letniego, całościowego szkolenia z terapii poznawczo – behawioralnej z dialogiem motywującym organizowanej przez Akademię Motywacji i Edukacji, rekomendowanej przez Polskie Towarzystwo Terapii Poznawczej i Behawioralnej oraz Europejskie Towarzystwo Terapii Poznawczej i Behawioralnej.</AboutMe>
          </MainInfo>
          <ProfileImgDiv>
            <ProfileImg layout="fill" src={ProfileImage} alt='Profile Image' />
          </ProfileImgDiv>

        </Introduction>
        <MoreAboutMe>

          <AboutMeRight>
            <p>Ukończyłam jednolite studia magisterskie z psychologii na Uniwersytecie Gdańskim z dwoma ścieżkami naukowymi: Psychologia Patologii Społecznych i Psychologia Sądowo-Penitencjarna oraz Psychologia Organizacji, Zarządzania i Marketingu. Jednocześnie jestem edukatorką seksualną oraz interwentką kryzysową.</p>            <br />
            <br />
            <p>Jestem członkinią Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej i pracuję zgodnie z Kodeksem Etyczno-Zawodowym Psychologa Polskiego Towarzystwa Psychologicznego. </p>
            <br />
            <p> Doświadczenie zawodowe zdobywałam głównie w Centrum Interwencji Kryzysowej Fundacji Dajemy Dzieciom Siłę w Gdańsku, jako interwentka kryzysowa, na oddziale psychiatrycznym w Wojewódzkim Szpitalu Psychiatrycznym im. prof. Tadeusza Bilikiewicza oraz w pracy gabinetowej. </p>
          </AboutMeRight>
          <AboutMeRight>
            <br />
            <p>W mojej pracy niezwykle ważne jest dla mnie indywidualne podejście do każdego klienta oraz relacja, którą wspólnie budujemy. Pracuję z pełnym zaangażowaniem i empatią, wykorzystując przebadane i skuteczne metody pomocy, głównie korzystając z podejścia poznawczo-behawioralnego oraz podejść trzeciej fali- ACT i dialogu motywującego. </p>
            <br />
            <p>Dbając o profesjonalizm udzielanej pomocy, regularnie uczestniczę w szkoleniach i konferencjach, ciągle poszerzając kompetencje psychologiczne oraz psychoterapeutyczne. Moją pracę poddaję regularnej superwizji u certyfikowanych superwizorów. </p>
            <br />
            <p>Jeżeli chciałabyś/ chciałbyś, abym towarzyszyła Ci w podróży do życia, którym chcesz żyć, skontaktuj się ze mną. </p>
            <br />
            <p>Do zobaczenia!</p>
          </AboutMeRight>
        </MoreAboutMe>
        <EducationDiv id='Edukacja'>
          <div>
            <Tittle>
              Wykształcenie
            </Tittle>
            <AboutMeRight>
              <p>Akademia Edukacji i Motywacji- całościowe szkolenie z Terapii Poznawczo – Behawioralnej z Dialogiem Motywującym</p>
              <br />
              <p>Uniwersytet Gdański — Wydział Nauk Społecznych — Psychologia pięcioletnie studia magisterskie. Ukończone dwie ścieżki naukowe Psychologia  Organizacji, Zarządzania i Marketingu oraz Psychologia Patologii Społecznych i Psychologia Sądowo- Penitencjarna. W tym zrealizowany program Przygotowania Pedagogicznego.</p>
              <br />
              <p>Universita degli Studi di Milano-Bicocca- Psicologia</p>
            </AboutMeRight>
          </div>

        </EducationDiv>
        <CoursesDiv>

          <Tittle>
            Kursy i konferencje
          </Tittle>
          <CoursesRef>
            <AboutMeRight>
              <p>Jak wzbogacić DBT o Dialog Motywujący</p>
              <br />
              <p>Dialog motywujący- o sporcie, zmianie nawyków i stylu życia</p>
              <br />
              <p>Dialog motywujący jako alternatywa wobec kar</p>
              <br />
              <p>9th Cracow Conference of Psychology and Law</p>
              <br />
              <p>Rozwijanie teorii umysłu</p>
              <br />
              <p>Jakość życia w niepłodności cz. II- psychologiczna</p>
              <br />
              <p>Jakość życia w niepłodności cz. I- medyczna</p>
              <br />
              <p>Seksuolog w procesie kształcenia ustawicznego cz. II Pacjent i seksuolog w procesie terapii</p>
              <br />
              <p>Teoria i praktyka terapeutyczna &quot;Między miłością a nienawiścią- o seksualności&quot;</p>
            </AboutMeRight>
            <AboutMeRight>
              <br />
              <p>Zdrada- problem czy objaw? Praca psychoterapeutyczna z parą</p>
              <br />
              <p>Konsensualna niemonogamia w pracy pomocowej</p>
              <br />
              <p>Rozwój psychoseksualny dziecka</p>
              <br />
              <p>Model PLISSIT/IC  w pracy pomocowej z seksualnością</p>
              <br />
              <p>Przemoc seksualna- perspektywa ofiar i sprawców</p>
              <br />
              <p>Wykorzystywanie seksualne dziecka: rozpoznanie, wsparcie, zgłaszanie</p>
              <br />
              <p>Kurs edukatorów seksualnych </p>
              <br />
              <p>ACT-owa rewolucja- cykl szkoleń</p>
            </AboutMeRight>
          </CoursesRef>
        </CoursesDiv>
        <PricesDiv id='Oferta'>
          <Prices>Oferta</Prices>
          <Offers>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox>
                <Subtext>Konsultacja indywidualna online</Subtext>
                <p>Jest to nasze pierwsze spotkanie, pierwszy krok do rozpoznania problemów, z jakimi się zmagasz. Konsultacje mogą być formą uzyskania porady psychologicznej lub wstępem do podjęcia terapii poznawczo behawioralnej. Podczas nich wspólnie przyjrzymy się naturze problemu, z którym przychodzisz i zdecydujemy o najlepszym możliwym działaniu. Najczęściej jest to jedno lub kilka spotkań. </p>
                <B>£45 (online) or £55 (w gabinecie)</B>
              </PriceBox>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox2>
                <Subtext>Psychoterapia indywidualna online</Subtext>
                <p>Psychoterapia jest formą leczenia problemów natury psychicznej. Swoją pracę opieram głównie na nurcie Poznawczo-Behawioralnym oraz podejściach trzeciej fali- ACT oraz Dialogu Motywującym. Są to metody pracy o udowodnionej skuteczności. Techniki dostosowane będą do Twoich potrzeb, możliwości oraz sytuacji, w której się znajdujesz. Psychoterapia jest dłuższą formą pomocy, a długość procesu ustalamy indywidualnie. Spotkania odbywają się najczęściej raz w tygodniu. </p>
                <B>£45 (online) or £55 (w gabinecie)</B>
              </PriceBox2>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" animateOnce >
              <PriceBox3>
                <Subtext>Interwencja kryzysowa online</Subtext>
                <p>Interwencja kryzysowa jest celowym wsparciem psychologicznym w krótkoterminowej formie (od kilku do kilkunastu spotkań). Sesje ukierunkowane są na powrót do równowagi po doświadczeniu kryzysu w życiu oraz rozwiązanie sytuacji problemowej. Najczęstsze sytuacje  to doświadczenie straty bliskiej osoby, wypadek lub inne zmiany w życiu. Te indywidualne spotkania przeprowadzam głównie w oparciu o teorię interwencji kryzysowej</p>
                <B>£45 (online) or £55 (w gabinecie)</B>
              </PriceBox3>
            </ScrollAnimation>
          </Offers>
        </PricesDiv>
        <Contact id='Kontakt'>
          <Prices>Kontakt </Prices>
          <ContactInfo>
            Obecnie wszystkie spotkania odbywają się online przez wybrany przez nas komunikator (nie trzeba niczego instalować). W celu umówienia się na sesje skontaktuj się ze mną wypełniając formularz lub pisząc na podanego niżej emaila.
          </ContactInfo>
          <DivForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register("email", { required: true })} placeholder='E-mail…' type="email" />
              <Input {...register("name", { required: true })} placeholder='Nazwa…' type="text" />
              <TextArea {...register("message", { required: true })} placeholder='Wiadomość…' rows="5" />
              <Button type='submit' color='green'>Wysłać</Button>
            </Form>
          </DivForm>
        </Contact>
      </Root>
      <Footer linkText="Linki do mojej sieci" />
    </>
  )
}


