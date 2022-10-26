import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length
                        ? <span>{slots[0]}</span> : <span className='text-red-500 font-thin capitalize'>Try Another day</span>

                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">
                    {/* The button to open modal */}
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;