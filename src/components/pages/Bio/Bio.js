import React from 'react'
import api from '../../../services/api'
import './biostyles.css'

const Bio = () => {

  const bio = api.bio.info

  return (
    <div id='#Bio' className='bio h-auto py-5'>
      <div class="container py-5">
        <div class="row">
          <div class="col-md-8 offset-md-2 display-5 pt-1 lh-1 fw-bold texto-blanco">
            <span class="texto-lineone">KEVIN</span><br />
            IS A FRONTEND <br />
            DEVELOPER <br />
            FROM CARACAS
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 offset-md-2 py-4">
            <img alt="img bio" class="imagen img-thumbnail border-0" src={require('../../assets/imagen.png')} />
          </div>
          <div class="col-md-4 fw-light py-5 px-5 texto-blanco " style={{ fontSize: '0.75rem' }}>
            {bio}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio