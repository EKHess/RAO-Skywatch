import React from 'react';
import Back from './Back';

function Info() {
    return (
        <section className='info-container'>
            <div className='info-text'>
                <Back/>

                <section>
                    <h2 className='info-header'>Images</h2>
                    <p>
                        Images on this site are sourced from the <a href='https://science.ucalgary.ca/rothney-observatory/about/skywatch-and-multimedia'>official Rothney Astrophysical Observatory Skywatch page</a> where each of the respective instrumentation is listed an described.
                    </p>

                    <p className='sub-paragraph'>
                        This app is not intended to replace the page linked above, but rather to organize the data from RAO instruments in a more convenient place for a telescope operator.
                    </p>
                </section>
                
                <section className='info-section'>
                    <h2 className='info-header'>Refreshing</h2>
                    <p>For convenience (and frankly the entire point of this app) the images from RAO instruments rerender every 60 seconds, and the time of the last rerender is indicated below each image.</p>

                    <p className='sub-paragraph'>
                        Please note that the images themselves may not update every 60 seconds, so be sure to check the time stamp on the actual image to know how current it trully is. RAO equipment goes down from time to time, but be assured that staff are actively trying to restore functionality as soon as possible. 
                    </p>
                </section>

                <section className='info-section'>
                    <h2 className='info-header'>Time</h2>
                    <p>The clock on each page displays two times.</p>

                    <p className='sub-paragraph'>The <span className='purple-text'>time in purple</span> is RAO Local Time. This is what I call the "RAO Clock".</p>

                    <p className='sub-paragraph'>The time written below the RAO clock is the current date and time in Universal Time Coordinated (UTC), which most telescope operating systems run on.</p>
                </section>
            </div>
        </section>
    )
}

export default Info;