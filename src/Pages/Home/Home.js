import React from 'react';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Banner from './Banner';
import Info from './Information/Info';
import Services from './Service/Services';
import Treatment from './Treatment/Treatment';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Treatment />
            <MakeAppointment />
        </div>
    );
};

export default Home;