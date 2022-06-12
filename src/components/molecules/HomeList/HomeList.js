import React from 'react'
import './styles.css'

const HomeList = () => {
  return (
    <>
    <div 
    className='d-flex flex-column' style={{height:'auto',marginLeft: '20vw', marginTop:'25vh'}}> 
      <p className='display-1' style={{color:'#fafafb', fontWeight:'bold'}}>DEVELOPER <br/>IN DEV HOUS<span className='display-1 parpadea text si'>E</span></p>
      <p className='fs-4' style={{color:'#fafafb'}}>+  React frontend developer</p>
      <p className='fs-4' style={{color:'#fafafb'}}>+  Express backend developer</p>
    </div>
    </>
  )
}

export default HomeList