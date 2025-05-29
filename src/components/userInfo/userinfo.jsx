import React from 'react';

const UserInfo = () => {
    const user = {
        name: 'Ahmed Farghaly',
        age: 21,
        email: 'ahmed@example.com',
        avatar: 'https://i.pravatar.cc/150?img=3', 
        dateOfBarth: 'dd/mm/yyyy', 
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md flex items-center space-x-4">
            <img
                className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                src={user.avatar}
                alt="User Avatar"
            />
            <div className='py-2'>
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-600">Age: {user.age}</p>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Date Of Barth: {user.dateOfBarth}</p>
            </div>
        </div>
    );
};

export default UserInfo;
