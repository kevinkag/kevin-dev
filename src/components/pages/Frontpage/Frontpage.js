import React from 'react'
import NavBar from '../../organisms/NavBar/NavBar'

import './stylesHome.css'
import HomeList from '../../molecules/HomeList/HomeList'
import api from '../../../services/api'

const Frontpage = () => {
  const navigation = api.navigation
  return (
    <div id='#Frontpage' className='home p-1'>
      <NavBar item={navigation}/>
      <HomeList/>
    </div>
  )
}

export default Frontpage