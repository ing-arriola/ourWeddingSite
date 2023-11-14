import Lottie from 'react-lottie';
import * as loadingAnimationData from '@/helpers/bg-loading.json'
import * as birdsAnimation from '@/helpers/loading.json'

const loadinganimationOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const birdsAnimtationOptions = {
    loop: true,
    autoplay: true, 
    animationData: birdsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Lottie options={loadinganimationOptions}
              height={800}
              width={800}
        />
        <section className='absolute bottom-[200px] pr-5 pl-5 w-full'>
            <section className='flex justify-center items-center bg-primaryColor opacity-70 rounded-lg p-5'>
                <label className='text-inria text-6xl md:text-9xl text-white font-extralight italic text-center w-72 md:w-[800px]'>La boda de Jaime y Lesly</label>
            </section>
            <Lottie options={birdsAnimtationOptions}
              height={200}
              width={200}
        />
        </section>
        
    </div>
  )
}
