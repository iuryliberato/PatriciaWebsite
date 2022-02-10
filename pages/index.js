import NavBar from "../components/NavBar"
import Logo2 from '../images/Logo2.png'


import Footer from "../components/Footer"
import { GlobalStyles } from "../components/GlobalStyles"
import { Root, Header, Heading, SubHeaidng, Introduction, MainInfo, Welcome, AboutMe, ProfileImgDiv, ProfileImg, MoreAboutMe, AboutMeRight, EducationDiv, Tittle, CoursesDiv, CoursesRef, PricesDiv, Prices, Offers, PriceBox, Subtext, B, PriceBox2, PriceBox3, Contact, ContactInfo, DivForm, Form, Input, TextArea, Button, SeeYou } from '../styles/styles'
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
      <NavBar links={[{ name: 'O mnie', id: 'O-mnie' }, { name: 'Edukacja', id: 'Edukacja' }, { name: 'Kursy/ konferencje', id: 'Kursy-konferencje' }, { name: 'Oferta', id: 'Oferta' }, { name: 'Kontakt', id: 'Kontakt' }]} image={Logo2} />
      <Root>
        <Header>
          <Heading>Patrycja Langa</Heading>
          <SubHeaidng>Psycolog / Psychoterapeuta </SubHeaidng>
        </Header>

        <Introduction id="O-mnie">

          <MainInfo>
            <Welcome >Witaj!</Welcome>
            <AboutMe>Jestem polskim psychologiem i&nbsp;psychoterapeutką poznawczo – behawioralną w&nbsp;trakcie certyfikacji, pracującą w&nbsp;Londynie oraz&nbsp;online. Pracuję z&nbsp;osobami, które doświadczają stanów lękowych, zaburzeń depresyjnych, problemów ze&nbsp;snem, przechodzących przez kryzysy czy&nbsp;po&nbsp;doświadczeniu traum, z&nbsp;osobami które borykają się&nbsp;ze&nbsp;stresem lub&nbsp;problemami natury seksualnej.</AboutMe>
          </MainInfo>
          <ProfileImgDiv>
            <ProfileImg layout="fill" src={ProfileImage} alt='Profile Image' />
          </ProfileImgDiv>

        </Introduction>
        <MoreAboutMe>

          <AboutMeRight>
            <p>Obecnie jestem w&nbsp;trakcie 4-letniego, całościowego szkolenia z&nbsp;terapii poznawczo – behawioralnej z&nbsp;dialogiem motywującym organizowanej przez&nbsp;Akademię Motywacji i&nbsp;Edukacji, rekomendowanej przez&nbsp;Polskie Towarzystwo Terapii Poznawczej i&nbsp;Behawioralnej oraz&nbsp;Europejskie Towarzystwo Terapii Poznawczej i&nbsp;Behawioralnej.</p>
            <br />
            <p>Ukończyłam jednolite studia magisterskie z&nbsp;psychologii na&nbsp;Uniwersytecie Gdańskim z&nbsp;dwoma ścieżkami naukowymi: Psychologia Patologii Społecznych i&nbsp;Psychologia Sądowo-Penitencjarna oraz&nbsp;Psychologia Organizacji, Zarządzania i&nbsp;Marketingu. Jednocześnie jestem edukatorką seksualną oraz&nbsp;interwentką kryzysową.</p>            <br />
            <br />
            <p>Jestem członkinią Polskiego Towarzystwa Terapii Poznawczej i&nbsp;Behawioralnej i&nbsp;pracuję zgodnie z&nbsp;Kodeksem Etyczno-Zawodowym Psychologa Polskiego Towarzystwa Psychologicznego. </p>
            <br />
            <p> Doświadczenie zawodowe zdobywałam głównie w&nbsp;Centrum Interwencji Kryzysowej Fundacji Dajemy Dzieciom Siłę w&nbsp;Gdańsku, jako interwentka kryzysowa, na&nbsp;oddziale psychiatrycznym w&nbsp;Wojewódzkim Szpitalu Psychiatrycznym im. prof. Tadeusza Bilikiewicza oraz w&nbsp;pracy gabinetowej. </p>
            <br />
          </AboutMeRight>
          <AboutMeRight>

            <p>W mojej pracy niezwykle ważne jest dla&nbsp;mnie indywidualne podejście do&nbsp;każdego klienta oraz&nbsp;relacja, którą wspólnie budujemy. Pracuję z&nbsp;pełnym zaangażowaniem i&nbsp;empatią, wykorzystując przebadane i&nbsp;skuteczne metody pomocy, głównie korzystając z&nbsp;podejścia poznawczo-behawioralnego oraz&nbsp;podejść trzeciej fali- ACT i&nbsp;dialogu motywującego. </p>
            <br />
            <p>Dbając o&nbsp;profesjonalizm udzielanej pomocy, regularnie uczestniczę w&nbsp;szkoleniach i&nbsp;konferencjach, ciągle poszerzając kompetencje psychologiczne oraz&nbsp;psychoterapeutyczne. Moją pracę poddaję regularnej superwizji u&nbsp;certyfikowanych superwizorów. </p>
            <br />
            <p>Jeżeli chciałabyś/ chciałbyś, abym towarzyszyła Ci w&nbsp;podróży do&nbsp;życia, którym chcesz&nbsp;żyć, skontaktuj się ze&nbsp;mną. </p>
            <br />
            <SeeYou>
              <p>Do zobaczenia!</p>
            </SeeYou>
          </AboutMeRight>
        </MoreAboutMe>
        <EducationDiv id='Edukacja'>
          <div>
            <Tittle>
              Wykształcenie
            </Tittle>
            <AboutMeRight>
              <p>Akademia Edukacji i&nbsp;Motywacji- całościowe szkolenie z&nbsp;Terapii Poznawczo – Behawioralnej z&nbsp;Dialogiem Motywującym</p>
              <br />
              <p>Uniwersytet Gdański — Wydział Nauk Społecznych — Psychologia pięcioletnie studia magisterskie. Ukończone dwie ścieżki naukowe Psychologia  Organizacji, Zarządzania i&nbsp;Marketingu oraz&nbsp;Psychologia Patologii Społecznych i&nbsp;Psychologia Sądowo- Penitencjarna. W tym&nbsp;zrealizowany program Przygotowania Pedagogicznego.</p>
              <br />
              <p>Universita degli Studi di&nbsp;Milano-Bicocca- Psicologia</p>
            </AboutMeRight>
          </div>

        </EducationDiv>
        <CoursesDiv id='Kursy-konferencje'>

          <Tittle>
            Kursy i konferencje
          </Tittle>
          <CoursesRef>
            <AboutMeRight>
              <p>Praca terapeutyczna z&nbsp;pacjentami z&nbsp;bezsennością- skuteczne interwencje</p>
              <br />
              <p>Perfekcjonizm- jak mogą pomóc terapia poznawczo-behawioralna i&nbsp;Racjonalna Terapia Zachowania</p>
              <br />
              <p>Prokrastynacja, czyli w&nbsp;pułapce zwlekania - techniki zmiany</p>
              <br />
              <p>Jak wzbogacić DBT o Dialog Motywujący</p>
              <br />
              <p>Dialog motywujący- o sporcie, zmianie nawyków i&nbsp;stylu życia</p>
              <br />
              <p>Dialog motywujący jako alternatywa wobec&nbsp;kar</p>
              <br />
              <p>9th Cracow Conference of Psychology and Law</p>
              <br />
              <p>Rozwijanie teorii umysłu</p>
              <br />
              <p>Jakość życia w niepłodności cz. II- psychologiczna</p>
              <br />
              <p>Jakość życia w niepłodności cz. I- medyczna</p>
              <br />

            </AboutMeRight>
            <AboutMeRight>
              <p>Seksuolog w procesie kształcenia ustawicznego&nbsp;cz. II Pacjent i&nbsp;seksuolog w&nbsp;procesie terapii</p>
              <br />
              <p>Teoria i praktyka terapeutyczna &quot;Między miłością a nienawiścią- o seksualności&quot;</p>
              <br />
              <p>Zdrada- problem czy objaw? Praca psychoterapeutyczna z&nbsp;parą</p>
              <br />
              <p>Konsensualna niemonogamia w&nbsp;pracy pomocowej</p>
              <br />
              <p>Rozwój psychoseksualny dziecka</p>
              <br />
              <p>Model PLISSIT/IC  w pracy pomocowej z&nbsp;seksualnością</p>
              <br />
              <p>Przemoc seksualna- perspektywa ofiar i&nbsp;sprawców</p>
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
            <PriceBox animateIn="fadeInRight" animateOnce >
              <Subtext>Konsultacja indywidualna </Subtext>
              <p>Jest to nasze pierwsze spotkanie, pierwszy krok do&nbsp;rozpoznania problemów, z&nbsp;jakimi się&nbsp;zmagasz. Konsultacje mogą być&nbsp;formą uzyskania porady psychologicznej lub&nbsp;wstępem do&nbsp;podjęcia terapii poznawczo behawioralnej. Podczas nich&nbsp;wspólnie przyjrzymy się&nbsp;naturze problemu, z&nbsp;którym przychodzisz i&nbsp;zdecydujemy o&nbsp;najlepszym możliwym działaniu. Najczęściej jest to&nbsp;jedno lub&nbsp;kilka spotkań. </p>
              <B>£45 (online) / £55 (w gabinecie)</B>
            </PriceBox>
            <PriceBox2 animateIn="fadeInRight" animateOnce >
              <Subtext>Psychoterapia indywidualna </Subtext>
              <p>Psychoterapia jest formą leczenia problemów natury psychicznej. Swoją pracę opieram głównie na&nbsp;nurcie Poznawczo-Behawioralnym oraz&nbsp;podejściach trzeciej fali- ACT oraz&nbsp;Dialogu Motywującym. Są&nbsp;to&nbsp;metody pracy o&nbsp;udowodnionej skuteczności. Techniki dostosowane będą do&nbsp;Twoich potrzeb, możliwości oraz&nbsp;sytuacji, w&nbsp;której się&nbsp;znajdujesz. Psychoterapia jest&nbsp;dłuższą formą pomocy, a&nbsp;długość procesu ustalamy indywidualnie. Spotkania odbywają się&nbsp;najczęściej raz&nbsp;w&nbsp;tygodniu. </p>
              <B>£45 (online) / £55 (w gabinecie)</B>
            </PriceBox2>
            <PriceBox3 animateIn="fadeInRight" animateOnce >
              <Subtext>Interwencja kryzysowa </Subtext>
              <p>Interwencja kryzysowa jest&nbsp;celowym wsparciem psychologicznym w&nbsp;krótkoterminowej formie (od&nbsp;kilku do&nbsp;kilkunastu spotkań). Sesje ukierunkowane są&nbsp;na&nbsp;powrót do&nbsp;równowagi po&nbsp;doświadczeniu kryzysu w&nbsp;życiu oraz&nbsp;rozwiązanie sytuacji problemowej. Najczęstsze sytuacje to &nbsp;świadczenie straty bliskiej osoby, wypadek lub&nbsp;inne zmiany w&nbsp;życiu. Te&nbsp;indywidualne spotkania przeprowadzam głównie w&nbsp;oparciu o&nbsp;teorię interwencji kryzysowej</p>
              <B>£45 (online) / £55 (w gabinecie)</B>
            </PriceBox3>
          </Offers>
        </PricesDiv>
        <Contact id='Kontakt'>
          <Prices>Kontakt </Prices>
          <ContactInfo>
            W&nbsp;celu umówienia&nbsp;się na&nbsp;sesje skontaktuj się&nbsp;ze mną&nbsp;wypełniając formularz lub&nbsp;pisząc na&nbsp;podanego niżej emaila.
          </ContactInfo>
          <DivForm>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input {...register("email", { required: true })} placeholder='E-mail…' type="email" />
              <Input {...register("name", { required: true })} placeholder='Imie…' type="text" />
              <TextArea {...register("message", { required: true })} placeholder='Wiadomość…' rows="5" />
              <Button type='submit' color='green'>WYŚLIJ</Button>
            </Form>
          </DivForm>
        </Contact>
      </Root>
      <Footer linkText="Gdzie mnie znajdziesz" />
    </>
  )
}


