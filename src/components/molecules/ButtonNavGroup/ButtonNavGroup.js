import React from 'react'

const ButtonNavGroup = ({ item }) => {
  return (
    <div className='row border'>
      {
        item.map((item, key) => (
          <div className='col border' key={key} style={{cursor: 'pointer'}}>
            <a
              type='button'
              className='text-decoration-none text-light px-4 py-1'
              href={`#${item.name}`}>
              {item.name}
            </a>
          </div>
        ))
      }
    </div>
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