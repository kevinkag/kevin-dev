import React from 'react'
import './styles.css'

const HomeList = () => {
  return (
    <>
      <div className="container d-flex">
        <div className='row w-100 align-items-end'>
          <div className='col-2 col-lg-2 h-50'></div>
          <div className='col-7 h-50'>
            <p className='display-1 text-light fw-bold'>DEVELOPER <br />IN DEV HOUS<span className='display-1 parpadea text si'>E</span></p>
            <p className='text-responsive text-light'>+  React frontend developer</p>
            <p className='text-responsive text-light'>+  Express backend developer</p>
          </div>
          <div className='col-auto h-50'></div>

        </div>
      </div>
    </>
  )
}

export default HomeList