import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='path not working' />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Term</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Sint esse expedita tempora consequuntur rem, sit eligendi ratione vitae!
                        Cupiditate perferendis quasi nulla quod, repudiandae nobis possimus sit fugiat ea eveniet?</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;