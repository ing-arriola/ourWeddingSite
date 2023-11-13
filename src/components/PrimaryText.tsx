interface primaryTextProps{
    text:string;
}

export const PrimaryText = ({text}:primaryTextProps) => {
  return (
    <label className='text-primaryColor text-lg font-thin'>{text}</label>
  )
}
