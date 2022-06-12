import React from 'react'
import './styles.css'

const IconoNav = ({ items }) => {
  console.log(items)
  return (
    items.map((item, k) => (
      <div className='' key={k}>
        <a
          href={item.link}
          target="_blank"
          className={`${item.name}`}
        ></a>
      
      </div>
    ))
  )
}
export default IconoNav