import React from 'react';
import { FooterMobile } from './components/js/FooterMobile';
import { Header } from './components/js/Header/Header';
import { Wrapper } from './components/js/Wrapper';
import { Advertesment } from './components/js/Advertesment';
import { SliderNewArrival } from './components/js/Slider/SliderNewArrival';
import { Title } from './components/js/Title';
import './components/css/style.css'
import { SliderShowOne } from './components/js/Slider/SliderShowOne';
import { whatWear, bestBags } from "./api/api";
import { About } from './components/js/About';
import { Footer } from './components/js/Footer';
import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from './components/js/HeaderMobile/HederMobile';

function App() {

  let isMobile: boolean = useMediaQuery({
    query: "(max-width: 1080px)"
  });

  return (
    <div>
      {isMobile ? <HeaderMobile /> : <Header />}
      <Wrapper>
        <Advertesment />
        <Title title='НОВЫЕ ПОСТУПЛЕНИЯ' />
        <SliderNewArrival />
        <Title title='ЧТО НОСИТЬ ПРЯМО СЕЙЧАС'/>
        <SliderShowOne data={whatWear} />
        <SliderShowOne data={bestBags} />
        <About />
        {isMobile ? <FooterMobile /> : <Footer />}
      </Wrapper>
    </div>
  );
}

export default App;
