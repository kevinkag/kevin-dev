import React from 'react'
import IconoNav from '../../atoms/IconoNav/IconoNav'
import './styles.css'

const FloatBar = ({item}) => {
  return (
    <div className='d-grid gap-3 ms-5 flex-column' style={{position:'fixed', bottom:'33vh', right:'4vw'}}>   
      <IconoNav items={item}/>
    </div>
  )
}

export default FloatBar