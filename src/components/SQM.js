import React from 'react';
import SkyCard from './SkyCard';

function SQM() {
    return (
        <section>
            <div className='single-img-container'>
                <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/SQMMpsasGraph.jpg" />
            </div>
        </section>
    )
}

export default SQM;