import React from 'react'
import svg_arrow from '../../assets/icons/arrow-right.svg'

const BriefcaseCard = ({ item }) => {
    const openProject = (url) => {
        window.open(url)
    }
    return (
        <div className="col my-4 d-flex justify-content-center">
            <div className="card p-4">

                <img className="img-brief fab fa-envira mt-3" src={require(`../../assets/${item.img_url}`)} alt="img briefcase" />

                <p className="h4 pt-4">{item.name}</p>
                <p className="description">
                    {item.description}
                </p>
                <span className="fas fa-arrow-right">
                    <img onClick={() => openProject(item.url)} className='icon-arrow' src={svg_arrow} alt="icono flecha a la derecha"/>
                </span>
            </div>
        </div>
    )
}

export default BriefcaseCard