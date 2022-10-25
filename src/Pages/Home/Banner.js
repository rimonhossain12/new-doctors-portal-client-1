import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='not working' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile starts here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Starts</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;