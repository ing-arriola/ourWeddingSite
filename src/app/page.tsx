"use client";
import { Button } from '@/components/Button'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { SectionSeparator } from '@/components/SectionSeparator';
import { BoldAndThinText } from '@/components/BoldAndThinText';
import { PrimaryText } from '@/components/primaryText';

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
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = () =>{
  return (
    <main>
      <section className='flex justify-between' >
        <img src='/flowersTopLeft.svg' />
        <section className='flex items-center'>
          <div className='text-primaryColor text-2xl font-thin italic'>Unidos por el proposito de Dios</div>
        </section>
        <img src='/FlowersTopRight.svg' />
      </section>
      <section className='flex justify-between '>
       <img src='/LeftBird.svg' />
        <section className='relative'>
        <img src='/lovers.svg' />
          <section className='absolute bottom-28 left-20'>
            <div className='text-primaryColor text-4xl font-thin italic w-[282px] text-center'>La boda de</div>
            <div className='text-primaryColor text-4xl font-thin italic w-[282px] text-center'>Jaime Arriola </div>
            <div className='text-primaryColor text-4xl font-thin italic w-[282px] text-center' >y </div>
            <div className='text-primaryColor text-4xl font-thin italic w-[282px] text-center' >Lesly Hernandez  </div>
          </section>
        </section>
        <img src='/RightBird.svg' />
      </section>
      <section className='flex justify-center flex-col items-center' >
        <Button/>
        <section className='bg-gradient-to-b font-thin italic p-5 rounded mt-5 from-white to-primaryColor flex flex-col items-center justify-end w-3/4'>
          <section>El que halla esposa halla el bien, Y alcanza la benevolencia de Jehová.</section>
          <section>Proverbios 18:22</section>
        </section>
      </section>
     <SectionSeparator/>
     <section className='flex justify-center items-center' >
      <img src='/leftDecSec2.svg' />
      <label className='text-primaryColor text-2xl font-thin italic' >Dios dibujo para si mismo sonrisas en nuestros corazones</label>
      <img src='/rightSecDec2.svg' />
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
        containerClass='h-[500px] w-1/2 rounded'
        >
        <img className='w-full h-[500px]' src='/lovers1.jpeg' />
        <img className='w-full h-[500px]' src='/lovers2.jpg' />
        <img className='w-full h-[500px]' src='/lovers3.jpeg' />
        <img className='w-full h-[500px]' src='/lovers4.jpg' />
        <img className='w-full h-[500px]' src='/lovers5.jpeg' />
        <img className='w-full h-[500px]' src='/lovers6.jpeg' />
      </Carousel>
      <label className='text-primaryColor text-lg font-thin italic mt-5 pr-24 pl-24' >La primera vez que hablamos fue por un correo y no imaginamos que ese primer contacto, seria el inicio de una historia que aun hoy en dia se continua escribiendo. La primera vez que hablamos fue por video llamada y ninguno de los 2 imagino que un dia anhelariamos conocernos en persona. Luego de 1 año de amistad finalmente dimos el paso de estar juntos, bajo circunstancias que no imaginamos, empezamos a volar juntos. Luego decidimos que era hora hora de soñar con estar juntos toda la vida y en el primer viaje de Jaime a New York, nos comprometimos y aunque en aquel momento no sabiamos cuando nos casariamos,si sabiamos que nuestros corazones fueron formados en la eternidad para caminar juntos toda la vida con Dios como fundamento de nuestro matrimonio.</label>
      </section>
      <SectionSeparator/>
      <section className='flex justify-between items-center '>
        <img src='/heartLeft.svg' />
          <section className='w-[560px]' >
            <label className=' text-primaryColor text-3xl font-thin italic text-center'>Quieres hacernos un regalo en efectivo? Utiliza los siguientes medios</label>
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
        <img src='/hearthRight.svg' />
      </section>
      <SectionSeparator/>
      <section className='flex justify-between'>
        <img src='/flowerLeft.svg' />
        <section className='flex items-center justify-center flex-col'>
          <section className='flex justify-center '>
            <label className=' text-primaryColor text-3xl font-thin italic text-center'>Acompañanos en nuestro dia especial</label>
          </section>
          <section className='flex flex-col justify-center items-center'>
            <label className='text-primaryColor text-lg'>Fecha: 23 de diciembre</label>
            <label className='text-primaryColor text-lg'>Nuestra boda</label>
            <BoldAndThinText boldText='Hora:' thinText=' 3:30 PM - 5:00 PM'/>
            <BoldAndThinText boldText='Lugar: ' thinText='Iglesia Cristiana Rey de Reyes'/>
            <PrimaryText  text='2902 Fulton St, Brooklyn, NY 11207' />
          </section>
        </section>
        
        <img src='/floweRight.svg' />
      </section>
    </main>
  )
}

export default Home