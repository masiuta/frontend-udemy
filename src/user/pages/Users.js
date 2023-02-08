import React from 'react';

import UserList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Vasya Pupkiin',
      image:
        'https://i.pinimg.com/280x280_RS/a8/9d/51/a89d51944756bc6936a7e3175f4807a1.jpg',
      place: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
