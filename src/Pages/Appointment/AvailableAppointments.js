import React from 'react';
import format from 'date-fns/format';
import { useState } from 'react';
import Service from './Service';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { isLoading, data: services, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }


    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data)
    //         })
    // }, [formattedDate]);

    return (
        <div>
            <h4 className='text-xl text-secondary text-center hover:underline'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {treatment && <BookingModal
                date={date} treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;