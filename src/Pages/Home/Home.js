import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from './Banner';
import Contact from './Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import Info from './Information/Info';
import Services from './Service/Services';
import Testimonial from './Testimonial/Testimonial';
import Treatment from './Treatment/Treatment';


const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;