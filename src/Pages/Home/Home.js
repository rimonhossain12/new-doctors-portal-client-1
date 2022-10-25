import React from 'react';
import Banner from './Banner';
import Info from './Information/Info';
import Services from './Service/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
        </div>
    );
};

export default Home;