interface sectionSeparatorProps{
  topMargin?:boolean
}

export const SectionSeparator = ({topMargin=true}:sectionSeparatorProps) => {
  return (
    <section className={`flex justify-center ${topMargin?'mt-10':''} mb-10`}>
      <img src='/sectionSeparator.svg' />
     </section>
  )
}
