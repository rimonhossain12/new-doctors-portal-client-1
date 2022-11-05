import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const Users = () => {

    const { isLoading, error, data: users } = useQuery('users', () =>
        fetch('http://localhost:5000/allUsers').then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return 'An error has occurred' + error.message;
    }

    return (
        <div>
            <h2 className="text-2xl">
                All Users: {users?.length}
            </h2>
        </div>
    );
};

export default Users;