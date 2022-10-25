import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Info from './Information/Info';
import Services from './Service/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;