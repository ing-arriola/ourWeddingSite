interface primaryTextProps{
    text:string;
    thin?:boolean;
    styles?:string;
}

export const  PrimaryText = ({text,thin=false,styles}:primaryTextProps) => {
  return (
    <label className={`text-primaryColor text-lg ${thin?'font-thin':''} ${styles}`}>{text}</label>
  )
}
