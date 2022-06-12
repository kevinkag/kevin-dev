import React from 'react'
import './biostyles.css'

const Bio = () => {

  const text = 'Im a paragraph. Click here to add your own text and edit me. Its easy. Just click Edit Text or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. Im a great place for you to tell a story and let your users know a little more about you. "/n" This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.'

  return (
    <div className='bio p-5'>


      <div class="container ms-3">
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
            <img class="imagen img-thumbnail border-0" src={require('../../assets/imagen.png')} />
          </div>
          <div class="col-md-4 fw-light py-5 px-5 texto-blanco " style={{ fontSize: '0.75rem' }}>
            {text}
          </div>
        </div>

      </div>




    </div>
  )
}

export default Bio