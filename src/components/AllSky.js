import React from 'react';
import SkyCard from './SkyCard';

function AllSky() {
    return (
        <section>
            <div className='single-img-container'>
                <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG" />
            </div>
        </section>
    )
}

export default AllSky;