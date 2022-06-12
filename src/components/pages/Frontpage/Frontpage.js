import React from 'react'
import NavBar from '../../organisms/NavBar/NavBar'
import FloatBar from '../../organisms/FloatBar/FloatBar'
import './stylesHome.css'
import HomeList from '../../molecules/HomeList/HomeList'
import api from '../../../services/api'

const Frontpage = () => {
  const navigation = api.navigation
  const float_bar = api.buttons_bar
  return (
    <div className='home p-1'>
      <NavBar item={navigation}/>
      <HomeList/>
    </div>
  )
}

export default Frontpage