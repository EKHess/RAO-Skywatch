import React from 'react';
import SkyCard from './SkyCard';

function WeatherCam() {
    return (
        <section>
            <div className='single-img-container'>
                <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
            </div>
        </section>
    )
}

export default WeatherCam;