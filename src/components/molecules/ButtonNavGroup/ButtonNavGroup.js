import React from 'react'

const ButtonNavGroup = ({ item }) => {
  return (
    item.map((item, key) => (
      <a
        type='button'
        className='nav-item nav-link text-decoration-none fs-5 text-light px-4 py-1'
        href={`#${item.name}`}>
        {item.name}
      </a>

    ))
    // <div className="btn-group" role="group" aria-label="Basic outlined example">
    //   <nav>
    //     {
    //       item.map((item) => (
    //         <button
    //           type='button'
    //           className='btn btn-outline-light btn-sm px-5 py-2 rounded-0 '
    //           to={item.name.toLowerCase()}>
    //           {item.name}
    //         </button>
    //       ))
    //     }
    //   </nav>
    // </div>
  )
}
export default ButtonNavGroup