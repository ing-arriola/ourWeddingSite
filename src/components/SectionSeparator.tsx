interface sectionSeparatorProps{
  topMargin?:boolean
  bottomMargin?:boolean
}

export const SectionSeparator = ({topMargin=true, bottomMargin=true}:sectionSeparatorProps) => {
  return (
    <section className={`flex justify-center ${topMargin?'mt-10':''} ${bottomMargin?'mb-10':''} `}>
      <img src='/sectionSeparator.svg' />
     </section>
  )
}
