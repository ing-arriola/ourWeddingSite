/* eslint-disable @next/next/no-img-element */
"use client";

import Carousel from "react-multi-carousel";
import Lottie from 'react-lottie';
import { Modal } from 'react-responsive-modal';
import { useRouter } from 'next/router'

import 'react-responsive-modal/styles.css';
import "react-multi-carousel/lib/styles.css";

import * as animationData from '@/helpers/heartsAnimation.json'
import * as loveAnimation from '@/helpers/animation2.json'
import * as envelopeAnimation from '@/helpers/envelope.json'
import * as giftAnimation from '@/helpers/gift.json'
import * as thanksAnimation from '@/helpers/thanks.json'

import { SectionSeparator } from '@/components/SectionSeparator';
import { BoldAndThinText } from '@/components/BoldAndThinText';
import { PrimaryText } from '@/components/PrimaryText';
import { Button } from '@/components/Button'
import { useEffect, useState } from "react";
import { Loading } from "@/components/Loading";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
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

const giftAnimationOptions = {
  loop: true,
  autoplay: true, 
  animationData: giftAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const thanksAnimationOptions = {
  loop: true,
  autoplay: true, 
  animationData: thanksAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


const Home = () =>{
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [password, setpassword] = useState('')
  const numbersArray = Array.from({ length: 16 }, (_, index) => index + 1);


  const checkPassword = () => {
    if(password === process.env.NEXT_PUBLIC_PASSWORD){
      onCloseModal();
      setpassword('')
      window.open('https://forms.gle/M6CiPFXjXkkrbDpi8', '_blank');
    }
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <main>
      {
        loading ? <Loading/> : (
          <>
            <Modal open={open} onClose={onCloseModal} center>
        <section className="flex justify-center items-center flex-col p-8">
          <PrimaryText text="Ingresa la contraseña que te enviamos"/>
          <input onChange={(e)=>{setpassword(e.target.value)}} value={password} className="border-solid border-primaryColor border-2 mb-5 mt-5 text-primaryColor"/>
          <Button label="Confirmar" onClick={checkPassword} />
        </section>
      </Modal>
      <section className='flex justify-center w-full'>
        <img src='/flowersTopLeft.svg' className='absolute left-0 w-28 md:w-60'/>
        <section className='flex items-center'>
          <div className='text-primaryColor font-extralight italic text-base md:text-3xl text-center w-48 mt-10 md:w-72 lg:w-80'>Unidos por el proposito de Dios</div>
        </section>
        <img src='/FlowersTopRight.svg' className='absolute right-0 w-28 md:w-60'/>
      </section>
      <section className='flex mt-10 justify-center md:justify-between '>
       <img src='/LeftBird.svg' className='hidden md:block' alt='Left Bird Image'/>
        <section className='relative'>
          <img src='/lovers.svg' className='w-60 md:w-[445px]'/>
          <section className='absolute bottom-[40px] left-[-20px] md:bottom-[75px] md:left-20'>
            <div className='text-primaryColor text-lg md:text-4xl font-thin italic w-[282px] text-center'>Invitacion a la boda de</div>
            <div className='text-primaryColor text-lg md:text-4xl font-thin italic w-[282px] text-center'>Jaime Arriola </div>
            <div className='text-primaryColor text-lg md:text-4xl font-thin italic w-[282px] text-center' >y </div>
            <div className='text-primaryColor text-lg md:text-4xl font-thin italic w-[282px] text-center' >Lesly Hernandez  </div>
          </section>
        </section>
        <img src='/RightBird.svg' className='hidden md:block' alt='Right Bird Image'/>
      </section>
      <section className='flex justify-center flex-col items-center' >
        <Lottie options={defaultOptions}
              height={100}
              width={220}
        />
        <Button onClick={onOpenModal} label="Confirma tu asistencia"/>
        <section className=' border-solid border-primaryColor border-2 font-thin italic p-2 md:p-3 rounded mt-5 flex flex-col items-center justify-end w-80 md:w-4/5 lg:w-3/5'>
          <section className='text-sm md:text-lg text-center text-primaryColor' >El que halla esposa halla el bien, Y alcanza la benevolencia de Jehová.</section>
          <section className='text-sm md:text-lg text-primaryColor'>Proverbios 18:22</section>
        </section>
      </section>
     <SectionSeparator bottomMargin={false}/>
     <section className='flex flex-col md:flex-row justify-center items-center' >

      <img src='/leftDecSec2.svg' className='w-16 md:w-44 hidden md:block'/>
      
      <label className='text-primaryColor text-lg md:text-2xl font-extralight italic mt-4 md:mt-0 mb-8 mr-4 ml-8 md:mb-0 text-center '>Dios dibujo para si mismo sonrisas en nuestros corazones</label>
      
      <img src='/rightSecDec2.svg' className='w-16 md:w-44 hidden md:block'/>

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
          {numbersArray.map(number => (<img key={number} className='w-full h-[500px]' src={`/lovers${number}.jpg`} alt={`lovers${number}`} />))}
        
      </Carousel>
        <Lottie options={loveAnimationOptions}
                height={200}
                width={200}
          />
      <label className='text-primaryColor text-lg font-extralight italic pr-14 pl-14 md:pr-24 md:pl-24' >La primera vez que hablamos fue por un correo y no imaginamos que ese primer contacto, seria el inicio de una historia que aun hoy en dia se continua escribiendo. La primera vez que nos vimos fue por video llamada y ninguno de los 2 imagino que un dia anhelariamos conocernos en persona. Luego de 1 año de amistad finalmente dimos el paso de estar juntos, bajo circunstancias que no imaginamos, empezamos a volar juntos. Luego decidimos que era hora hora de soñar con estar juntos toda la vida y en el primer viaje de Jaime a New York, nos comprometimos y aunque en aquel momento no sabiamos cuando nos casariamos,si sabiamos que nuestros corazones fueron formados en la eternidad para caminar juntos toda la vida con Dios como fundamento de nuestro matrimonio.</label>

        <Lottie options={envelopeAnimationOptions}
                height={200}
                width={200}
          />

      </section>
      <SectionSeparator topMargin={false}/>
      <section className='flex justify-center md:justify-between items-center '>
        <img src='/heartLeft.svg' className='hidden md:block'/>
          <section className='w-96 md:w-[560px] flex justify-center flex-col' >
            <label className=' text-primaryColor text-xl md:text-3xl font-extralight italic text-center'>Quieres hacernos un regalo en efectivo? Utiliza los siguientes medios</label>
            <Lottie options={giftAnimationOptions}
              height={100}
              width={100}
            />
            <section className='flex justify-center flex-col items-center'>
              <section>
                <label className='text-primaryColor text-lg'>Zelle:</label>
                <label className='text-primaryColor text-lg font-thin'>+1 917-547-2845</label>
              </section>
              <section>
                <label className='text-primaryColor text-lg'>Paypal:</label>
                <label className='text-primaryColor text-lg font-thin'>lhernandez@flushinginternational.org</label>
              </section>
            </section>
            <Lottie options={thanksAnimationOptions}
              height={100}
              width={250}
            />
          </section>
          
        <img src='/hearthRight.svg' className='hidden md:block'/>
      </section>
      
      <SectionSeparator topMargin={false} bottomMargin={false}/>
      <section className='flex justify-center md:justify-between mt-5 md:mt-0'>
        <img src='/flowerLeft.svg' className='hidden md:block' />
        <section className='flex items-center justify-center flex-col'>
          <section className='flex justify-center '>
            <label className=' text-primaryColor text-2xl md:text-3xl font-extralight italic text-center'>Acompañanos en nuestro dia especial</label>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <PrimaryText styles="mt-4" text="Fecha: 23 de diciembre" />
            <section>         
            </section>
            <PrimaryText styles="m-4" text="Nuestra boda" />
            <BoldAndThinText boldText='Hora:' thinText=' 3:30 PM - 5:00 PM'/>
            <BoldAndThinText boldText='Lugar: ' thinText='Iglesia Cristiana Rey de Reyes'/>
            <PrimaryText  thin text='2902 Fulton St, Brooklyn, NY 11207' />
            <a  href="https://maps.app.goo.gl/q7Aa5kKgSfEtCCor5" target="_blank" className="flex items-center mt-5">
              <img src='/map.png' className='w-8'/>
              <label className="text-primaryColor cursor-pointer" >Ver Mapa</label>
            </a>        
            <PrimaryText styles="mb-4 mt-8" text="Recepcion" />
            <BoldAndThinText boldText="Hora: " thinText="6:00 PM - 9:30 PM" />
            <BoldAndThinText boldText="Lugar: " thinText="193 Bradford St, Brooklyn, NY 11207" />
            <a href="https://maps.app.goo.gl/13s5kVRqwhzXBaxh8" target="_blank" className="flex items-center mt-5">
            <img src='/map.png' className='w-8'/>
            <label className="text-primaryColor"  >Ver mapa</label>
            </a>
            
          </section>
          
        </section>
        
        <img src='/floweRight.svg' className='hidden md:block'/>
      </section>
      <section className="flex flex-col items-center  justify-center">
        <PrimaryText styles="italic mt-4" text="Hecho con Amor por "/>
        <PrimaryText styles="mb-4" text="Jaime Arriola y Lesly Hernandez" />
        <img src='/footer.svg'/>
      </section>

          </>
        )
      }
    </main>
  )
}

export default Home