import React from 'react'
import './styles.css'

const HomeList = () => {
  return (
    <>
      <div className="container d-flex">
        <div className='row w-100 align-items-end'>
          <div className='col-2 col-lg-2 h-50'></div>
          <div className='col-7 h-50'>
            <p className='display-1 text-light fw-bold'>FRONT-END <br />IN DEV HOUS<span className='display-1 parpadea text si'>E</span></p>
            <p className='text-responsive text-light ms-5'>+ ReactJS</p>
            <p className='text-responsive text-light ms-5'>+ Bootstrap 5</p>
            <p className='text-responsive text-light ms-5'>+ React Redux</p>
          </div>
          <div className='col-auto h-50'></div>
        </div>
      </div>
    </>
  )
}

export default HomeList