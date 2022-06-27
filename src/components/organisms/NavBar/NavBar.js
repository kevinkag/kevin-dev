import React from 'react'
import TitleNavBar from '../../atoms/TitleNavBar/TitleNavBar'
import ButtonNavGroup from '../../molecules/ButtonNavGroup/ButtonNavGroup'

const NavBar = ({ item }) => {
  return (
    <div className="mt-3 ">
      <nav className="navbar navbar-expand-lg navbar-dark position-fixed d-flex w-100">
        <div className="container">
          <TitleNavBar>KEVIN CASTRO.</TitleNavBar>
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