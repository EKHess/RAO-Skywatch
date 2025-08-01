import React from 'react';

function Footer() {
    return (
        <div className='footer-container'>
            <p className='signature'>Made by <a href='#'>Eric Hess</a></p>
            <ul className='socials-container'>
                <li><a href='https://github.com/EKHess/RAO-Skywatch' target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href='https://x.com/EricHessOnline' target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href='https://www.instagram.com/erichessonline/' target='_blank'><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href='https://www.youtube.com/@erichessonline' target='_blank'><ion-icon name="logo-youtube"></ion-icon></a></li>
            </ul>
        </div>
    )
}

export default Footer;