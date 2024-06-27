import React from 'react';
import SkyCard from './SkyCard';

function Home() {
    return (
    <section>
        <div className='skycard-container'>
        <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/AllSkyCurrentImage.JPG" />
        <SkyCard baseURL="https://cam01.sci.ucalgary.ca/AllSkyCam/SQMMpsasGraph.jpg" />
        <SkyCard baseURL="https://cam01.sci.ucalgary.ca/netcam/152/1.jpg" />
        </div>
    </section>
    )
}

export default Home;