import React from 'react';
import format from 'date-fns/format';
import { useState, useEffect } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        // fetch('http://localhost:8000/services')
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])


    return (
        <div>
            <h4 className='text-xl text-secondary text-center hover:underline'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date} treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;