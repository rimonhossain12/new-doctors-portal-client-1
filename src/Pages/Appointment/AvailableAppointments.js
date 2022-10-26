import React from 'react';
import format from 'date-fns/format';
import { useState, useEffect } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';


const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);


    // async function getUser() {
    //     try {
    //         const response = await fetch('http://localhost:5000/services', {
    //             method: 'GET',
    //             headers: {
    //                 content: 'application/json',
    //             },
    //         });
    //         if (!response.ok) {
    //             throw new Error(`Error! Status ${response.status}`)
    //         }
    //         const result = await response.json();
    //         console.log(result);
    //         // return result;
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(json => console.log(json))
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