interface primaryTextProps{
    text:string;
    thin?:boolean
}

export const PrimaryText = ({text,thin=false}:primaryTextProps) => {
  return (
    <label className={`text-primaryColor text-lg ${thin?'font-thin':''}`}>{text}</label>
  )
}
