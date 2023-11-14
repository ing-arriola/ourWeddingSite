interface ButtonProps {
  onClick:()=>void;
  label:string
}

export const Button = ({onClick,label}:ButtonProps) => {
  return (
    <button onClick={onClick} className='flex p-3 md:p-3 justify-center rounded-full opacity-75 text-base md:text-lg bg-primaryColor font-thin italic w-52 md:w-56  transition-transform duration-300 transform hover:translate-y-[-0.3rem] hover:shadow-md active:translate-y-[-0.1rem] active:shadow-sm relative'>
      {label}
    </button>
  )
}
