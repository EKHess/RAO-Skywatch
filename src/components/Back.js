import React from 'react';
import { useNavigate } from 'react-router-dom';

function Back() {

    const navigate = useNavigate();

    const goBack = () => {
        // Go back one page in memory
        navigate(-1);
    }

    return (
        <div className='back-btn-container' onClick={goBack}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            <p className='back-btn'>Back</p>
        </div>
    )
}

export default Back;