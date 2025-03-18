import React from 'react'

function Sectionwraper({children}) {
  return (
    <div className='max-w-[1630px] lg:px-10 md:px-7 px-5 mx-auto w-full'>
      {children}
    </div>
  )
}

export default Sectionwraper
