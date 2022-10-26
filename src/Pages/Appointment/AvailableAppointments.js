import React from 'react';
import format from 'date-fns/format';

const AvailableAppointments = ({ date }) => {
    return (
        <div>
            Available Appointments on {format(date, 'PP')}

        </div>
    );
};

export default AvailableAppointments;