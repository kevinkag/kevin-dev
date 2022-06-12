import React from 'react'
import TitleNavBar from '../../atoms/TitleNavBar/TitleNavBar'
import ButtonNavGroup from '../../molecules/ButtonNavGroup/ButtonNavGroup'

const NavBar = ({item}) => {
  return (
    <div >
      <nav className='navbar navbar-expand-lg'>
        <div className='container-fluid px-5'>
          <TitleNavBar>KEVIN CASTRO.</TitleNavBar>
          <ButtonNavGroup item={item}/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar