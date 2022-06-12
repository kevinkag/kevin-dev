import React from 'react'

const TitleNavBar = ({children}) => {
  return (
    <div className='h3' style={{fontFamily: 'tahoma', fontWeight:'bold', color: '#fafafb'}}>{children}</div>
  )
}

export default TitleNavBar