import React from 'react';
// import chair from '../../../assets/images/chair.png';

const InfoCard = ({ img }) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;