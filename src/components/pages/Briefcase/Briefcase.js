import React from 'react'
import BriefcaseCard from '../../molecules/BriefcaseCard/BriefcaseCard'
import './briefcaseStyles.css'

const Briefcase = () => {

    return (
        <div id='#Briefcase' className="d-flex briefcase py-5">
            <div class="container py-5">
                <div class="display-1 titulo my-4 ms-5">Briefcase</div>
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