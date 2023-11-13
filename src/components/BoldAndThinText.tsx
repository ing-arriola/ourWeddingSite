interface Props {
    boldText:string;
    thinText:string;
}

export const BoldAndThinText = ({boldText,thinText}:Props) => {
  return (
    <section>
              <label className='text-primaryColor text-base'>{boldText}</label>
              <label className='text-primaryColor text-base font-thin italic'>{thinText}</label>
    </section>
  )
}
