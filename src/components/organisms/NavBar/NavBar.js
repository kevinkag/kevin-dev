import React from 'react'
import TitleNavBar from '../../atoms/TitleNavBar/TitleNavBar'
import ButtonNavGroup from '../../molecules/ButtonNavGroup/ButtonNavGroup'
import './styles.css'

const NavBar = ({ item }) => {
  return (
    <div className="m-3">
      <nav className="navbar container-head p-3 start-0 top-0 navbar-expand-lg navbar-dark position-fixed d-flex w-100">
        <div className="container">
          <TitleNavBar>KEVIN MARTÍNEZ.</TitleNavBar>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              
            </div>
            <div className="navbar-nav ms-auto">
            <ButtonNavGroup item={item}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

        

export default NavBar