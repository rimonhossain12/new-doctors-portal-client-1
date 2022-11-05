import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                    // logout and token khaiya dimu
                }
                return res.json()
            }

            )
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${user?.email} Successfully made an admin!`);
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
            <td><button className='btn btn-xs'>Remove user</button></td>
        </tr>
    );
};

export default UserRow;