import React from 'react';
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
        </div>
    );
};

export default Home;