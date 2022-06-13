import React from 'react'
import BriefcaseCard from '../../molecules/BriefcaseCard/BriefcaseCard'
import './briefcaseStyles.css'

const Briefcase = () => {

    return (
        <div className="d-flex briefcase p-5">
            <div class="container">
                <div class="display-3 titulo my-4">Briefcase</div>
                <div class="row g-2">
                    <BriefcaseCard/>
                    <BriefcaseCard/>
                    <BriefcaseCard/>
                    <BriefcaseCard/>
                </div>
            </div>
        </div>
    )
}

export default Briefcase