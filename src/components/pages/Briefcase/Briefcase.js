import React from 'react'
import api from '../../../services/api'
import BriefcaseCard from '../../molecules/BriefcaseCard/BriefcaseCard'
import './briefcaseStyles.css'

const Briefcase = () => {

    const data = api.briefcase

    return (
        <div id='#Briefcase' className="d-flex briefcase py-5">
            <div class="container py-5">
                <div class="display-1 titulo my-4 ms-5">Briefcase</div>
                <div class="row g-2">
                    {
                        data.map((item, i) => (
                            <BriefcaseCard key={i} item={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Briefcase