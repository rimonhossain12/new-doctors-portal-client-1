import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { isLoading, error, data: users, refetch } = useQuery('users', () =>
        fetch('http://localhost:5000/allUsers', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return 'An error has occurred' + error.message;
    }

    return (
        <div>
            <h2 className="text-2xl mb-5">
                All user patient =  {users.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;