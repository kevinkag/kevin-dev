import React from 'react'

const BriefcaseCard = () => {
    return (
        <div class="col">
            <div class="card p-4">
                <span class="fab fa-envira mt-3">
                    <img className='image-card' src={require('../../assets/imagen.png')}/>
                </span>
                <p class="h4 pt-4">Garden Care</p>
                <p class="description">
                    Seeking justice in the world is a sed significant emotional and investment when we follow
                    this
                    call.
                </p>
                <span class="fas fa-arrow-right"></span>
            </div>
        </div>
        // <div class="col1 me-md-4 mb-md-0 mb-5">
        //                     <div class="card pb-4">
        //                         <span class="fab fa-envira mt-3">K</span>
        //                         <p class="h4 pt-4">Garden Care</p>
        //                         <p class="p1 text-muted">
        //                             Seeking justice in the world is a sed significant emotional and investment when we follow
        //                             this
        //                             call.
        //                         </p>
        //                         <span class="fas fa-arrow-right"></span>
        //                     </div>
        //                 </div>
    )
}

export default BriefcaseCard