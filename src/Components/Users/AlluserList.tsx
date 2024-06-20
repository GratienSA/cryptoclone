"use client"
import React, { useEffect, useState } from 'react';
import { getAllUsersAssets } from '@/Service/trade';
import { User } from '@/Utils/types';
import AllUser from './AlluserCard';

const AllUserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getAllUsersAssets();
      setUsers(usersData);
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {users.map(user => (
        <AllUser key={user.pseudo} user={user} />
      ))}
    </div>
    </div>
  );
};

export default AllUserList;
