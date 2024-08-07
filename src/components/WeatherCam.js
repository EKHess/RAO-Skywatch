import React from 'react';
import SkyCard from './SkyCard';

function WeatherCam() {
    return (
        <section className='weather-container'>
            <div className='single-img-container'>
                <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
            </div>
            <div className='weather-service'>
                <div className='service-header'>
                    <h2 className='service-id'>Environment Canada Weather Radar</h2>
                    <a href='https://weather.gc.ca/?layers=,radar&center=51.11095646,-113.99474637&zoom=11' target='_blank'><ion-icon name="link-outline"></ion-icon></a>
                </div>
                <iframe id='ec-radar' src='https://weather.gc.ca/?layers=,radar&center=50.91436437,-114.30552115&zoom=11'></iframe>
            </div>
        </section>
        
    )
}

export default WeatherCam;