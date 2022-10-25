import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {

    return (
        <section className='flex justify-center items-center bg-cover bg-center' style="background-image: url(...)">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='tex-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores voluptatem vel nobis consequatur cupiditate saepe officia nihil commodi quos dolorem quidem architecto similique numquam, consequuntur totam! Repudiandae sapiente perferendis tenetur suscipit alias velit ipsa,
                    explicabo at? Ad sit quisquam cupiditate.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;