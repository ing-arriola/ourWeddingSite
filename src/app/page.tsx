/* eslint-disable @next/next/no-img-element */
"use client";

import Carousel from "react-multi-carousel";
import Lottie from 'react-lottie';
import "react-multi-carousel/lib/styles.css";

import * as animationData from '@/helpers/heartsAnimation.json'
import * as loveAnimation from '@/helpers/animation2.json'
import * as envelopeAnimation from '@/helpers/envelope.json'

import { SectionSeparator } from '@/components/SectionSeparator';
import { BoldAndThinText } from '@/components/BoldAndThinText';
import { PrimaryText } from '@/components/PrimaryText';
import { Button } from '@/components/Button'




const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const envelopeAnimationOptions = {
  loop: true,
  autoplay: true, 
  animationData: envelopeAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const loveAnimationOptions = {
  loop: true,
  autoplay: true, 
  animationData: loveAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


const Home = () =>{
  return (
    <main>
      <section className='flex justify-between w-full'>
        <img src='/flowersTopLeft.svg' className='w-28 md:w-40 '/>
        <section className='flex items-center'>
          <div className='text-primaryColor font-thin italic text-base md:text-2xl text-center'>Unidos por el proposito de Dios</div>
        </section>
        <img src='/FlowersTopRight.svg' className='w-28 md:w-40'/>
      </section>
      <section className='flex justify-center md:justify-between '>
       <img src='/LeftBird.svg' className='hidden md:block' alt='Left Bird Image'/>
        <section className='relative'>
        <img src='/lovers.svg' className='w-60 md:w-[445px]'/>
          <section className='absolute bottom-[50px] left-[-20px] md:bottom-28 md:left-20'>
            <div className='text-primaryColor text-base md:text-4xl font-thin italic w-[282px] text-center'>La boda de</div>
            <div className='text-primaryColor text-base md:text-4xl font-thin italic w-[282px] text-center'>Jaime Arriola </div>
            <div className='text-primaryColor text-base md:text-4xl font-thin italic w-[282px] text-center' >y </div>
            <div className='text-primaryColor text-base md:text-4xl font-thin italic w-[282px] text-center' >Lesly Hernandez  </div>
          </section>
        </section>
        <img src='/RightBird.svg' className='hidden md:block' alt='Right Bird Image'/>
      </section>
      <section className='flex justify-center flex-col items-center' >
        <Lottie options={defaultOptions}
              height={100}
              width={100}
        />
        <Button/>
        <section className='bg-gradient-to-b font-thin italic p-3 md:p-5 rounded mt-5 from-white to-primaryColor  flex flex-col items-center justify-end w-full md:w-3/4'>
          <section className='text-sm md:text-lg text-center' >El que halla esposa halla el bien, Y alcanza la benevolencia de Jehová.</section>
          <section className='text-sm md:text-lg'>Proverbios 18:22</section>
        </section>
      </section>
     <SectionSeparator/>
     <section className='flex flex-col md:flex-row justify-center items-center' >
      {/* <section className='flex justify-between w-full block md:hidden'>
      <img src='/leftDecSec2.svg' className='w-16 md:w-44'/>
      <img src='/rightSecDec2.svg' className='w-16 md:w-44'/>
      </section> */}
      <img src='/leftDecSec2.svg' className='w-16 md:w-44 hidden md:block'/>
      
      <label className='text-primaryColor text-lg md:text-2xl font-thin italic mt-4 md:mt-0 text-center ' >Dios dibujo para si mismo sonrisas en nuestros corazones</label>
      <Lottie options={envelopeAnimationOptions}
              height={100}
              width={100}
        />
      <img src='/rightSecDec2.svg' className='w-16 md:w-44 hidden md:block'/>
     {/*  <section className='flex flex-row-reverse justify-between w-full block md:hidden'>
      <img src='/leftDecSec2.svg' className='w-16 md:w-44'/>
      <img src='/rightSecDec2.svg' className='w-16 md:w-44'/>
      </section> */}
     </section>
      <section className='flex flex-col justify-center items-center'>
        
      <Carousel 
        responsive={responsive}
        showDots={true}
        infinite={true}
        autoPlaySpeed={500}
        draggable={true}
        ssr={true}
        itemClass='flex items-center justify-center w-96 h-96'
        containerClass='h-[500px] w-80 md:w-1/2 rounded'
        >
        <img className='w-full h-[500px]' src='/lovers1.jpeg' />
        <img className='w-full h-[500px]' src='/lovers2.jpg' />
        <img className='w-full h-[500px]' src='/lovers3.jpeg' />
        <img className='w-full h-[500px]' src='/lovers4.jpg' />
        <img className='w-full h-[500px]' src='/lovers5.jpeg' />
        <img className='w-full h-[500px]' src='/lovers6.jpeg' />
      </Carousel>
      <Lottie options={loveAnimationOptions}
              height={100}
              width={100}
        />
      <label className='text-primaryColor text-lg font-thin italic pr-14 pl-14 md:pr-24 md:pl-24' >La primera vez que hablamos fue por un correo y no imaginamos que ese primer contacto, seria el inicio de una historia que aun hoy en dia se continua escribiendo. La primera vez que nos vimos fue por video llamada y ninguno de los 2 imagino que un dia anhelariamos conocernos en persona. Luego de 1 año de amistad finalmente dimos el paso de estar juntos, bajo circunstancias que no imaginamos, empezamos a volar juntos. Luego decidimos que era hora hora de soñar con estar juntos toda la vida y en el primer viaje de Jaime a New York, nos comprometimos y aunque en aquel momento no sabiamos cuando nos casariamos,si sabiamos que nuestros corazones fueron formados en la eternidad para caminar juntos toda la vida con Dios como fundamento de nuestro matrimonio.</label>
      </section>
      <SectionSeparator/>
      <section className='flex justify-center md:justify-between items-center '>
        <img src='/heartLeft.svg' className='hidden md:block'/>
          <section className='w-96 md:w-[560px] flex justify-center flex-col' >
            <label className=' text-primaryColor text-xl md:text-3xl font-thin italic text-center'>Quieres hacernos un regalo en efectivo? Utiliza los siguientes medios</label>
            <section className='flex justify-center flex-col items-center mt-8'>
              <section>
                <label className='text-primaryColor text-lg'>Zelle:</label>
                <label className='text-primaryColor text-lg font-thin'>+1 917-547-2845</label>
              </section>
              <section>
                <label className='text-primaryColor text-lg'>Paypal:</label>
                <label className='text-primaryColor text-lg font-thin'>lhernandez@flushinginternational.org</label>
              </section>
            </section>
          </section>
        <img src='/hearthRight.svg' className='hidden md:block'/>
      </section>
      
      <SectionSeparator/>
      <section className='flex justify-between'>
        <img src='/flowerLeft.svg' className='hidden md:block' />
        <section className='flex items-center justify-center flex-col'>
          <section className='flex justify-center '>
            <label className=' text-primaryColor text-3xl font-thin italic text-center'>Acompañanos en nuestro dia especial</label>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <PrimaryText text="Fecha: 23 de diciembre" />
            <PrimaryText  text="Nuestra boda" />
            <BoldAndThinText boldText='Hora:' thinText=' 3:30 PM - 5:00 PM'/>
            <BoldAndThinText boldText='Lugar: ' thinText='Iglesia Cristiana Rey de Reyes'/>
            <PrimaryText  thin text='2902 Fulton St, Brooklyn, NY 11207' />
            <PrimaryText text="Recepcion" />
            <BoldAndThinText boldText="Hora: " thinText="6:00 PM - 9:30 PM" />
            <BoldAndThinText boldText="Lugar: " thinText="193 Bradford St, Brooklyn, NY 11207" />
          </section>
        </section>
        
        <img src='/floweRight.svg' className='hidden md:block'/>
      </section>
    </main>
  )
}

export default Home